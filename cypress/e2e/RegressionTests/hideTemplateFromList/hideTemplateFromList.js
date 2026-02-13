/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import DataUtils from "../../../support/dataUtils"
import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { After } from "@badeball/cypress-cucumber-preprocessor";
import HideTemplateFromListActions from "/home/az/rania_trello_2/cypress/PageObjects/hideTemplateFromList/Actions.cy.js"
import HideTemplateFromListAssertions from "/home/az/rania_trello_2/cypress/PageObjects/hideTemplateFromList/Assertions.cy.js"


const hideTemplateAssertions = new HideTemplateFromListAssertions()
const hideTemplateActions = new HideTemplateFromListActions()
const dataUtil = new DataUtils()
const cardName = "A-card"
const boardName = "Template-Board"
const listName = "Finished"
let boardID, boardURL;


Before({ tags: "@HideTemplate" }, () => {
  return dataUtil.createBoard(boardName).then((response) => {
    boardID = response.body.id
    boardURL = response.body.url

    return dataUtil.createList(listName, boardID)
  }).then(() => {

    return dataUtil.createCard(cardName, boardID)
  }).then(() => {

    cy.loginToTrello()
    cy.visit(boardURL)
    cy.contains(cardName).click()
    cy.findByTestID("card-back-actions-button").click()
    cy.findByTestID("card-back-make-template-button").click()
    cy.wait(3000)
    cy.contains('Template').should('be.visible')
    cy.findByTestID("CloseIcon").last().scrollIntoView().click()
  })
})


When("The user hides template", () => {
hideTemplateActions.OpenTemplateCard().hideTemplateCard()
})


Then("The template should not appear in the list", () => {
  hideTemplateAssertions.checkTemplateCardISHiddenFromList(cardName, listName)
})



After({ tags: "@HideTemplate" }, () => {
  if (boardID) {
    dataUtil.deleteBoard(boardID)
  }
})
