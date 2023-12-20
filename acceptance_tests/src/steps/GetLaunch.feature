@GetLauch
Feature: Get launch

    Scenario: Get launch
        Given I have a request to get a launch
        When I make a request to get a launch
        Then I should receive a launch