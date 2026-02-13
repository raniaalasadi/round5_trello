Feature: Move template card to another list

@MoveTemplate @regression
  Scenario: Validate that the User can move a template card to another list
    When the user moves the template card to another list
    Then the template card should be moved successfully
