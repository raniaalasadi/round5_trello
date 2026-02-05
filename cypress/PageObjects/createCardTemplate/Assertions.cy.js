class CreateCardTemplateAssertions {

  checkThatTheCardContainsTemplateBadge() {
    return cy.findByTestID("template-card-back-banner").find('h1').should("contain", "This is a Template card.")
  }
}
export default CreateCardTemplateAssertions
