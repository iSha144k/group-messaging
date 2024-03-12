import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";


Given("I visit the {string} group", (group: string) => {
    cy.visit(`https://christ-ministry-420749.churchcenter.com/my/groups/${group}/messages`);
});

Given("I open {string}", (messageTitle: string) => {
    cy.contains('h2', messageTitle).click()
});

When("the messages tab is displayed", () => {
    cy.contains('a', "Messaging").should('exist')
});

When("I open the options", () => {
    cy.contains('button', "Options").click()
});

Then("the create button should be displayed", () => {
    cy.contains('a', "New").should('exist')
});

Then("the create button should not be displayed", () => {
    cy.contains('a', "New").should('not.exist')
});

Then("the messages tab is not displayed", () => {
    cy.contains('a', "Messaging").should('not.exist')
});

Then("the Options button should not be displayed", () => {
    cy.contains('button', "Options").should('not.exist')
});

Then("the Delete button should be displayed", () => {
    cy.contains('div', "Delete").should('exist')
});
