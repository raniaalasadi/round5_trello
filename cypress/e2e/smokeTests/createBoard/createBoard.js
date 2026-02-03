/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import createBoardActions from "../../../PageObjects/createBoard/Actions"
import createBoardAssertions from "../../../PageObjects/createBoard/Assertions"

const BoardAction = new createBoardActions()
const BoardAssertion = new createBoardAssertions()

const boardName = "new-board"

Given("The User login to Trello", () => {
  cy.loginToTrello()
})

When("The User clicks on Create button", () => {
  BoardAction.clicksOnCreateButton()
})

When("The User selects create board from the list", () => {
  BoardAction.selectCreateBoardOnTheList()
})

When("The User types the board name in Board title field", () => {
  BoardAction.typeBoardNameInBoardTitleField(boardName)
})

When("The User clicks on create button in the Tab", () => {
  BoardAction.clickOnCreateButtonInTheTab()
})

Then("The board should be created successfully", () => {
  BoardAssertion.checkBoardNameIsEqual(boardName)
  BoardAssertion.checkURLIsContain(boardName)
})
