import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";


Given("I am on the messages screen", () => {
    cy.visit("https://christ-ministry-420749.churchcenter.com/my/groups/test-group/messages");
});


Then("I should see the messages screen", () => {
    cy.contains('h1', "Messaging").should('exist')
});
