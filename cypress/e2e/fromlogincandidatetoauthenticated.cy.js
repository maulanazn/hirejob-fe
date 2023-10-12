describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://hirejob.pages.dev')

    cy.get("form a[class='workerLogin']").click()
  })
})