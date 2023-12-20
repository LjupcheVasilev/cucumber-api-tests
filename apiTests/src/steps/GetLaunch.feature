Feature: Get Launch

    Scenario: Get Launch successfully
        Given I have a request with ID
            | Fields | Values                   |
            | id     | 5eb87cd9ffd86e000604b32a |
        When I send a request to get Launch
        Then I should receive a response
            | Fields   | Values                   |
            | status   | 200                      |
            | launchId | 5eb87cd9ffd86e000604b32a |

    Scenario: Get Launch with invalid ID
        Given I have a request with ID
            | Fields | Values    |
            | id     | InvalidId |
        When I send a request to get Launch
        Then I should receive a response
            | Fields       | Values                             |
            | status       | 200                                |
            | errorMessage | Launch with id InvalidId not found |