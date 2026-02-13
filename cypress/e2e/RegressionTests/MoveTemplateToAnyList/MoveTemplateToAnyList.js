/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import DataUtils from "../../../support/dataUtils"
import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { After } from "@badeball/cypress-cucumber-preprocessor";
import MoveTemplateCardToAnyListActions from "/home/az/rania_trello_2/cypress/PageObjects/moveTemplateToAnylist/Actions.cy.js"
import MoveTemplateCardToAnyListAssertions from "/home/az/rania_trello_2/cypress/PageObjects/moveTemplateToAnylist/Assertions.cy.js"



const MoveTemplateActions = new MoveTemplateCardToAnyListActions()
const MoveTemplateAssertions = new MoveTemplateCardToAnyListAssertions()
const dataUtil = new DataUtils()
const cardName = "A-card"
const boardName = "Move-Template-Board"
const listName = "Finished"
let boardID, boardURL;


Before({ tags: "@MoveTemplate" }, () => {
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


When("the user moves the template card to another list", () => {
MoveTemplateActions.OpenTemplateCard().MoveTemplatetoList(listName)
})


Then("the template card should be moved successfully", () => {
  MoveTemplateAssertions.checkTemplateCardExistsInList(cardName,listName)
})



After({ tags: "@MoveTemplate" }, () => {
  if (boardID) {
    dataUtil.deleteBoard(boardID)
  }
})
