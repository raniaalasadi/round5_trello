/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import DataUtils from "../../../support/dataUtils"
import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { After } from "@badeball/cypress-cucumber-preprocessor";
import updateTemplateCardActions from "/home/az/rania_trello_2/cypress/PageObjects/updateTemplateCard/Actions.cy.js"
import updateTemplateNameAssertions from "/home/az/rania_trello_2/cypress/PageObjects/updateTemplateCard/Assertions.cy.js"


const updateTemplateAction = new updateTemplateCardActions()
const updateTemplateAssertion = new updateTemplateNameAssertions()

const updatedName = "final-Card"
const dataUtil = new DataUtils()
const cardName = "A-card"
const boardName = "Template-Board"
let boardID, boardURL;

Before({ tags: "@updateCardTemplate" }, () => {
  return dataUtil.createBoard(boardName).then((response) => {
    boardID = response.body.id
    boardURL = response.body.url

    return dataUtil.createCard(cardName, boardID)
  }).then(() => {

    cy.loginToTrello()
    cy.visit(boardURL)
    cy.contains(cardName).click()
    cy.findByTestID("card-back-actions-button").click()
    cy.findByTestID("card-back-make-template-button").click()
    cy.wait(3000)
    cy.contains('Template').should('be.visible')

  })
})

Given("the user opens trello board {string}", () => {
updateTemplateAction.openTemplateBoard(boardURL)
})


Given("the user opens template card {string}", () => {
updateTemplateAction.openTemplateCard(cardName)
})


When("the user updates template name to {string}", (updatedName) => {
updateTemplateAction.updateTemplateName(updatedName)
})


Then("template name should be updated successfully", () => {
  updateTemplateAssertion.CheckTemplateCardNameIsChangedToNewTemplateName().should("contain.text",updatedName)
})


After({ tags: "@updateCardTemplate" }, () => {
  if (boardID) {
    dataUtil.deleteBoard(boardID)
  }
})
