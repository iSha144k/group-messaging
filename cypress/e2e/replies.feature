Feature: Replies

  Scenario: Read messages
    Given I am on the messages screen
    And I click the create button
    And a message with "Message with Replies" as the title
    When the message is sent
    Then "Message with Replies" should be the title

  Scenario: Disable replies
    Given I am on the messages screen
    And I open "Message with Replies"
    When I open the options
    And click Disable replies
    And I click okay
    Then the "Replies are turned off" message should appear

  Scenario: Enable replies
    Given I am on the messages screen
    And I open "Message with Replies"
    When I open the options
    And click Enable replies
    And I click okay
    Then the "No replies" message should appear

  Scenario: Reply to a message
    Given I am on the messages screen
    And I open "Message with Replies"
    And I enter "Good" as a reply
    When I send the reply
    Then "Good" should appear as a reply

  Scenario: Edit a reply
    Given I am on the messages screen
    And I open "Message with Replies"
    When I open the reply options
    And click Edit
    And change the reply to "Great"
    And click Save changes
    Then "Great" should appear as a reply

  Scenario: React to a reply
    Given I am on the messages screen
    And I open "Message with Replies"
    When I click the reaction button
    And select "❤️" as a reaction
    Then "❤️" should appear as a reaction

  Scenario: Change a reaction
    Given I am on the messages screen
    And I open "Message with Replies"
    When I click the reaction button
    And select "🙏️" as a reaction
    Then "🙏" should appear as a reaction

  Scenario: View Reactions
    Given I am on the messages screen
    And I open "Message with Replies"
    When I open the reply options
    And click View Reactions
    Then the reactions should appear

  Scenario: Delete a reply
    Given I am on the messages screen
    And I open "Message with Replies"
    When I open the reply options
    And click Delete
    And I click okay
    Then "Great" should not appear as a reply
