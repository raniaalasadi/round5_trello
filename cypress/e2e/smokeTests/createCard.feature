Feature: Create Card functionality
@generateboard
  Scenario: validate that the user can create a Card
    Given The user navigate to the board
    When  The user clicks on Add a card button
    When  The user types card title in card title input field
    When  The user clicks on Add Card button
    Then  The card should be created successfully
