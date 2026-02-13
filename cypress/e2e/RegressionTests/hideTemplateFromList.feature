  Feature: Hide Template from list
@regression @HideTemplate
  Scenario: Validate That the User can hide template from list
    When The user hides template
    Then The template should not appear in the list
