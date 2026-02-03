/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import createCardActions from "../../../PageObjects/createCard/Actions.cy"
import createCardAssertions from "../../../PageObjects/createCard/Assertions.cy"
import DataUtils from "../../../support/dataUtils"
import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { After } from "@badeball/cypress-cucumber-preprocessor";

const dataUtil = new DataUtils()
const cardAction = new createCardActions()
const cardAssertion = new createCardAssertions()
const cardName = "Rania-card"
const boardName = "Rania-board"
let boardID, boardURL;

Before({ tags: "@generateboard" }, () => {
  dataUtil.createBoard(boardName).then((response) => {
    boardID = response.body.id
    boardURL = response.body.url
  })
  cy.loginToTrello()
});

Given("The user navigate to the board",() => {
  cardAction.openBoard(boardURL)
})

When("The user clicks on Add a card button",() => {
  cardAction.clickOnAddACardButton()
})

When("The user types card title in card title input field", () => {
  cardAction.typeCardNameInCardTitleInput(cardName)
})

When("The user clicks on Add Card button", () => {
  cardAction.clickOnAddCardButton()
})

Then("The card should be created successfully", () => {
  cardAssertion.checkCardTitleIsContain(cardName)
})

After({ tags: "@generateboard" }, () => {
  if (boardID) {
    dataUtil.deleteBoard(boardID)
  }
})
