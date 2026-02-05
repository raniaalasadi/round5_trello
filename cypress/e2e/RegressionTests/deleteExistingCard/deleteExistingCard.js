/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import DeleteCardActions from "../../../PageObjects/deleteExistingCard/Actions.cy"
import DeleteCardAssertions from "../../../PageObjects/deleteExistingCard/Assertions.cy"
import DataUtils from "../../../support/dataUtils"
import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { After } from "@badeball/cypress-cucumber-preprocessor";
const deleteCardActions = new DeleteCardActions()
const deleteCardAssertions = new DeleteCardAssertions()
const dataUtil = new DataUtils()
const cardName = "R-card"
const boardName = "Rania-board"
let boardID, boardURL;

Before({ tags: "@deleteCard" }, () => {
  return dataUtil.createBoard(boardName).then((response) => {
    boardID = response.body.id
    boardURL = response.body.url

    return dataUtil.createCard(cardName, boardID)
  }).then(() => {
    cy.loginToTrello()
  })
})

Given("The user open the board {string}", () => {
  deleteCardActions.openBoard(boardURL)
})

Given("The user open the Existing Card {string}", () => {
  deleteCardActions.openCard(cardName)
})

When("The user archive the card", () => {
  deleteCardActions.archiveCard(cardName)
})

When("The user delete the card", () => {
  deleteCardActions.deleteCard(cardName)
})

When("The user confirm the delete action", () => {
  deleteCardActions.confirmDeleteCard(cardName)
})

Then("The card should be deleted successfully from the card list", () => {
  deleteCardAssertions.checkThatTheCardIsNotExistFromTheList()
})

After({ tags: "@deleteCard" }, () => {
  if (boardID) {
    dataUtil.deleteBoard(boardID)
  }
})

