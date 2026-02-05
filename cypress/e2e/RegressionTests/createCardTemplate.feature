Feature: Create Card Template

@regression @CardTemplate
  Scenario: Validate that The User can create card template from existing card
    Given The user opens Trello board "Template-Board"
    Given The user opens existing card "A-card"
    When  The user makes the card a template
    Then The card should be marked as a template
