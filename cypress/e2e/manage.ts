import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";


Given("I am on the messages screen", () => {
    cy.visit("https://christ-ministry-420749.churchcenter.com/my/groups/test-group/messages");
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


When("the message is sent", () => {
    cy.contains('input', "Send").click()
});

When("I click the notification bell", () => {
    cy.get('a[href*="notifications"]').click()
});

When("I open the options", () => {
    cy.contains('button', "Options").click()
});

When("click Edit", () => {
    cy.contains('div', "Edit").click()
});

When("I change the title to {string}", (input: string) => {
    cy.get('input[placeholder*="Title"]').clear()
    cy.get('input[placeholder*="Title"]').type(input)
});

When("the message is saved", () => {
    cy.contains('input', "Save").click()
});

When("click Delete", () => {
    cy.contains('div', "Delete").click()
});

When("I click okay", () => {
    cy.on("window:confirm", (t) => {
        cy.log(t)
        return true;
    });
});

Then("{string} should be in the notifications", (expected: string) => {
    cy.contains('h3', expected).should('exist')
});

Then("{string} should be the title", (expected: string) => {
    cy.contains('h1', expected).should('exist')
});

Then("{string} should not exist", (expected: string) => {
    cy.visit("https://christ-ministry-420749.churchcenter.com/my/groups/test-group/messages");
    cy.contains('h2', expected).should('not.exist')
});
