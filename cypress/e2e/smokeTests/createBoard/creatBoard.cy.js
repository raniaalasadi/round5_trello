/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import createBoardActions from "../../../PageObjects/createBoard/Actions.cy"
import createBoardAssertions from "../../../PageObjects/createBoard/Assertions.cy"

const BoardAction = new createBoardActions()
const BoardAssertion = new createBoardAssertions()

const boardName = "Rania-board"

Given("The User login to Trello",() => {
  cy.loginToTrello()
})

When("The User clicks on Create button", () => {
  BoardAction.clicksOnCreateButton()
})

When("The User selects create board from the list", () => {
  BoardAction.selectCreateBoardOnTheList()
})

When("The User types the board name in Board title field", (boardName) => {
  BoardAction.typeBoardNameInBoardTitleField(boardName)
})

When("The User clicks on create button", () => {
  BoardAction.clickOnCreateButtonInTheTab()
})

Then("The board should be created successfully", () => {
  BoardAssertion.checkBoardNameIsEqual(boardName)
  BoardAssertion.checkURLIsContain(boardName)
})
