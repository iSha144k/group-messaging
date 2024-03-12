import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const LONG_TITLE = "The Church Center application users are most likely aware of the 144-character limit on the title when creating a new message in a group on the app."

Given("I am on the messages screen", () => {
    cy.visit("/my/groups/test-group/messages");
});

Given("I click the create button", () => {
    cy.contains('a', "New").click()
});

Given("a message with {string} as the title", (input: string) => {
    cy.get('input[placeholder*="Title"]').type(input)
});

Given("a message with a title more than 144 characters", () => {
    cy.get('input[placeholder*="Title"]').type(LONG_TITLE)
});

Given("a message with {string} as the body", (input: string) => {
    cy.get('textarea[placeholder*="Message"]').type(input)
});

Given("replies are disabled", () => {
    cy.contains('label', "Allow replies").click()

    // cy.get('input[id*="repliesEnabled"]').click()
});

When("the message is sent", () => {
    cy.contains('input', "Send").click()
});

When("the message is canceled", () => {
    cy.contains('button', "Cancel").click()
});

When("I click okay", () => {
    cy.on("window:confirm", (t) => {
        return true;
    });
});

When("I click cancel", () => {
    cy.on("window:confirm", (t) => {
        return false;
    });
});

Then("{string} should be the title", (expected: string) => {
    cy.contains('h1', expected).should('exist')
});

Then("{string} should be the body", (expected: string) => {
    cy.contains('p', expected).should('exist')
});

Then("a {string} error message should appear", (message: string) => {
    cy.contains('div', message).should('exist')
});

Then("{string} should be the drafted title", (title: string) => {
    cy.get("input").should("have.attr", "value", title);
});

Then("I should see the messages screen", () => {
    cy.contains('h1', "Messaging").should('exist')
});

Then("replies should be disabled", () => {
    cy.contains('h3', "Replies are turned off").should('exist')
});

