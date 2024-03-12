import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";


Given("I am on the messages screen", () => {
    cy.visit("/my/groups/test-group/messages");
});

Given("I click the create button", () => {
    cy.contains('a', "New").click()
});

Given("a message with {string} as the title", (input: string) => {
    cy.get('input[placeholder*="Title"]').type(input)
});

Given("I open {string}", (messageTitle: string) => {
    cy.contains('h2', messageTitle).click()
});

Given("I enter {string} as a reply", (input: string) => {
    cy.get('textarea[placeholder*="Message this group"]').type(input)
});

When("the message is sent", () => {
    cy.contains('input', "Send").click()
});

When("I open the options", () => {
    cy.contains('button', "Options").click()
});

When("click Disable replies", () => {
    cy.contains('div', "Disable replies").click()
});

When("click Enable replies", () => {
    cy.contains('div', "Enable replies").click()
});

When("I click okay", () => {
    cy.on("window:confirm", (t) => {
        cy.log(t)
        return true;
    });
});

When("I send the reply", () => {
    cy.get('button[aria-label*="Submit message"]').click()
});

When("I open the reply options", () => {
    cy.get('.reply-controls').find('button').click()
});

When("click Edit", () => {
    cy.contains("Edit").click()
});

When("change the reply to {string}", (input: string) => {
    cy.contains('textarea', "Good").clear()
    cy.get('.messaging__edit-reply-input').type(input)
});

When("click Save changes", () => {
    cy.contains('button', "Save changes").click({force: true})
});

When("I click the reaction button", () => {
    cy.get('button[aria-label*="Add reaction"]').click()
});

When("select {string} as a reaction", (reaction: string) => {
    cy.contains("div", reaction).click()
});

When("click View Reactions", () => {
    cy.contains('div', "View Reactions").click({force: true})
});

When("click Delete", () => {
    cy.contains('div', "Delete").click({force: true})
});

Then("{string} should be the title", (expected: string) => {
    cy.contains('h1', expected).should('exist')
});

Then("the {string} message should appear", (expected: string) => {
    cy.contains('h3', expected).should('exist')
});

Then("{string} should appear as a reply", (expected: string) => {
    cy.contains('p', expected).should('exist')
});

Then("{string} should appear as a reaction", (expected: string) => {
    cy.contains('p', expected).should('exist')
});

Then("the reactions should appear", () => {
    cy.contains('h3', "Reactions").should('exist')
});

Then("{string} should not appear as a reply", (expected: string) => {
    cy.contains('p', expected).should('not.exist')
});
