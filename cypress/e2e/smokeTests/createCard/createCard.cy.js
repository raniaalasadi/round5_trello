/// <reference types="cypress" />

import createCardActions from "../../../PageObjects/CreateCard/Actions.cy"
import createCardAssertions from "../../../PageObjects/CreateCard/Assertions.cy"
import dataUtils from "../../../support/dataUtils.cy"
import { Given, When, Then } from "/home/az/trello_rania/cypress/e2e/smokeTests/CreateCard.feature/steps"

const dataUtil = new dataUtils()
const cardAction = new createCardActions()
const cardAssertion = new createCardAssertions()



const cardName = "Rania-card"
const boardName = "Rania-board"
let boardID ; boardURL ;
///Creation for board using API///
before(()=>{
  dataUtil.createBoard(boardName).then((response)=>{
boardID = response.body.id
boardURL = response.body.url
  })
  cy.loginToTrello()

})

Given("The user navigate to the board",()=>{
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

after(()=>{
dataUtil.DeleteBoard(boardID)
})
