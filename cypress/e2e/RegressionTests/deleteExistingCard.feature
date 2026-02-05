Feature: Delete Card on Trello

@regression @deleteCard
  Scenario: validate that the user can delete existing card successfully
    Given The user open the board "delete-test-card-board"
    Given The user open the Existing Card "R-card"
    When  The user archive the card
    When  The user delete the card
    When  The user confirm the delete action
    Then  The card should be deleted successfully from the card list
