class updateTemplateNameAssertions {

  CheckTemplateCardNameIsChangedToNewTemplateName() {
    return cy.findByTestID("card-name")
  }

}
export default updateTemplateNameAssertions
