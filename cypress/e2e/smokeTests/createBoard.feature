Feature: Create a board in Trello
  Scenario: Create a new board
    Given The User login to Trello
    When  The User clicks on Create button
    When  The User selects create board from the list
    When  The User types the board name in Board title field
    When  The User clicks on create button in the Tab
    Then The board should be created successfully
