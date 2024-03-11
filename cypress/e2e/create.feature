Feature: Create

  Scenario: Create a message with a title and body
    Given I am on the messages screen
    And I click the create button
    And a message with "First Title" as the title
    And a message with "First Body" as the body
    When the message is sent
    Then "First Title" should be the title
    And "First Body" should be the body

  Scenario: Create a message without a body
    Given I am on the messages screen
    And I click the create button
    And a message with "Second Title" as the title
    When the message is sent
    Then "Second Title" should be the title

  Scenario: Create a message without a title
    Given I am on the messages screen
    And I click the create button
    And a message with "Third Body" as the body
    When the message is sent
    Then a "can't be blank" error message should appear

  Scenario: Draft a message with a title more than 144 characters
    Given I am on the messages screen
    And I click the create button
    And a message with a title more than 144 characters
    When the message is sent
    Then a "is too long (maximum is 144 characters)" error message should appear

  Scenario: Delete a drafted message
    Given I am on the messages screen
    And I click the create button
    And a message with "Fifth Title" as the title
    When the message is canceled
    And I click okay
    Then I should see the messages screen

  Scenario: Delete a empty draft
    Given I am on the messages screen
    And I click the create button
    When the message is canceled
    Then I should see the messages screen

  Scenario: Create a message with replies disabled
    Given I am on the messages screen
    And I click the create button
    And a message with "Sixth Title" as the title
    And replies are disabled
    When the message is sent
    Then "Sixth Title" should be the title
    And replies should be disabled


