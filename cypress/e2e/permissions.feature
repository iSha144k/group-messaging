Feature: Permissions

  Scenario: Leaders can send messages in leader-only messaging group
    Given I visit the "messaging-leaders-only-as-leader" group
    When the messages tab is displayed
    Then the create button should be displayed

  Scenario: Members cannot send messages in leader-only messaging group
    Given I visit the "messaging-leaders-only-as-member" group
    When the messages tab is displayed
    Then the create button should not be displayed

  Scenario: Leaders can send messages in leader and member messaging group
    Given I visit the "messaging-all-as-leader" group
    When the messages tab is displayed
    Then the create button should be displayed

  Scenario: Members can send messages in leader and member messaging group
    Given I visit the "messaging-all-as-member" group
    When the messages tab is displayed
    Then the create button should be displayed

  Scenario: Leaders cannot send messages in no messaging groups
    Given I visit the "no-messaging-as-leader" group
    Then the messages tab is not displayed

  Scenario: Members cannot send messages in no messaging groups
    Given I visit the "no-messaging-as-member" group
    Then the messages tab is not displayed

  Scenario: Members cannot edit other messages
    Given I visit the "messaging-private-user-as-member" group
    And I open "Message from another user"
    Then the Options button should not be displayed

  Scenario: Leaders should delete any message
    Given I visit the "messaging-private-user-as-leader" group
    And I open "Message from another user"
    When I open the options
    Then the Delete button should be displayed

