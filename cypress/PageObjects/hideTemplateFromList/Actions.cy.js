class HideTemplateFromListActions {

  OpenTemplateCard() {
    cy.findByTestID("card-name").click()
    return this
  }

  hideTemplateCard (){
    cy.findByTestID("card-back-actions-button").click()
    cy.findByTestID("card-back-archive-button").click()
    cy.findByTestID("CloseIcon").last().scrollIntoView().click()

    return this
  }
}
export default HideTemplateFromListActions
