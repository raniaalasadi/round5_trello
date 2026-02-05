/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import DataUtils from "../../../support/dataUtils"
import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { After } from "@badeball/cypress-cucumber-preprocessor";
import CreateCardTemplateActions from "/home/az/rania_trello_2/cypress/PageObjects/createCardTemplate/Actions.cy.js"
import CreateCardTemplateAssertions from "/home/az/rania_trello_2/cypress/PageObjects/createCardTemplate/Assertions.cy.js"

const cardTemplateAssertions = new CreateCardTemplateAssertions()
const cardTemplateActions = new CreateCardTemplateActions()
const dataUtil = new DataUtils()

const cardName = "A-card"
const boardName = "Template-Board"
let boardID, boardURL;

Before({ tags: "@CardTemplate" }, () => {
  return dataUtil.createBoard(boardName).then((response) => {
    boardID = response.body.id
    boardURL = response.body.url

    return dataUtil.createCard(cardName, boardID)
  }).then(() => {
    cy.loginToTrello()
  })
})

Given("The user opens Trello board {string}", () => {
  cardTemplateActions.openTemplateBoard(boardURL)
})

Given("The user opens existing card {string}", () => {
  cardTemplateActions.openExistingCard(cardName)
})

When("The user makes the card a template", () => {
  cardTemplateActions.makeCardAsATemplate()
})

Then("The card should be marked as a template", () => {
  cardTemplateAssertions.checkThatTheCardContainsTemplateBadge()
})

After({ tags: "@CardTemplate" }, () => {
  if (boardID) {
    dataUtil.deleteBoard(boardID)
  }
})
