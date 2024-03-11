Feature: Manage

  Scenario: Read messages
    Given I am on the messages screen
    And I click the create button
    And a message with "Recent Message" as the title
    When the message is sent
    Then "Recent Message" should be the title

  Scenario: Edit a message
    Given I am on the messages screen
    And I open "Recent Message"
    When I open the options
    And click Edit
    And I change the title to "Recent Message v2"
    And the message is saved
    Then "Recent Message v2" should be the title

  Scenario: Delete a message
    Given I am on the messages screen
    And I open "Recent Message v2"
    When I open the options
    And click Delete
    And I click okay
    Then "Recent Message v2" should not exist
