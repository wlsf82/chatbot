describe('chatbot', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#lovable-badge-close').click()
  })

  it("What was the result of my team's last game?", () => {
    cy.get('[data-testid="chat-input"]')
      .type("What was the result of my team's last game?")

    cy.get('[data-testid="send-button"]').click()

    cy.get('[data-testid="typing-bubble"]').should('be.visible')
    cy.get('[data-testid="typing-bubble"]').should('not.exist')
    cy.get('[data-testid="message-text"]')
      .last()
      .invoke('text')
      .then(text => {
        cy.wrap(text).should('be.oneOf', [
          'They won! 🎉',
          'They lost :(',
          'It was a tie'
        ])
      })
  })

  it('Which moon is this?', () => {
    cy.get('[data-testid="chat-input"]')
      .type('Which moon is this?')

    cy.get('[data-testid="send-button"]').click()

    cy.get('[data-testid="typing-bubble"]').should('be.visible')
    cy.get('[data-testid="typing-bubble"]').should('not.exist')
    cy.get('[data-testid="message-text"]')
      .last()
      .invoke('text')
      .then(text => {
        cy.wrap(text).should('be.oneOf', [
          "It's a waning moon 🌖",
          "It's a new moon 🌑",
          "It's a horned moon 🌙",
          "It's a full moon 🌕"
        ])
      })
  })

  it('Which color is that?', () => {
    cy.get('[data-testid="chat-input"]')
      .type('Which color is that?')

    cy.get('[data-testid="send-button"]').click()

    cy.get('[data-testid="typing-bubble"]').should('be.visible')
    cy.get('[data-testid="typing-bubble"]').should('not.exist')
    cy.get('[data-testid="message-text"]')
      .last()
      .invoke('text')
      .then(text => {
        cy.wrap(text).should('be.oneOf', [
          "It's white 🤍",
          "It's green 💚",
          "It's blue 💙",
          "It's brown 🤎",
          "It's red ❤️",
          "It's purple 💜",
          "It's orange 🧡",
          "It's yellow 💛",
          "It's black 🖤"
        ])
      })
  })

  it('Invalid question', () => {
    cy.get('[data-testid="chat-input"]')
      .type('What time is it?')

    cy.get('[data-testid="send-button"]').click()

    cy.get('[data-testid="typing-bubble"]').should('be.visible')
    cy.get('[data-testid="typing-bubble"]').should('not.exist')
    cy.get('[data-testid="message-text"]')
      .last()
      .should(
        'have.text',
        "I can only answer questions about your team's last game, which moon this is, or which color that is. Try asking me one of those!"
      )
  })
})
