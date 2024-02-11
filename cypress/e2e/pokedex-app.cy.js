describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('pokemon page can be navigated to', function () {
    cy.visit('http://localhost:5000')
    cy.contains('arbok').click()
    cy.contains('unnerve')
  })
  it('pokemon page can be navigated to and back to homepage', function () {
    cy.visit('http://localhost:5000')
    cy.contains('arbok').click()
    cy.contains('unnerve')
    cy.contains('Home').click()
    cy.contains('metapod')
  })
})
