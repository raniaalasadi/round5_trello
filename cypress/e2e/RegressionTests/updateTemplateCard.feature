Feature: Update template name

@regression @updateCardTemplate
  Scenario: Validate that the User can update template name
    Given the user opens trello board "Template-Board"
    Given the user opens template card "A-card"
    When the user updates template name to "final-Card"
    Then template name should be updated successfully
