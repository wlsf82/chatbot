Cypress._.times(3, () => {
  describe('chatbot', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('#lovable-badge-close').click()
    })

    afterEach(() => {
      cy.wait(1000) // Wait for demonstrations purpose.
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
          ])
        })
    })
  })
})
