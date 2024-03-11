// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, server) => {

    cy.session([email, server], () => {
        cy.visit("https://christ-ministry-420749.churchcenter.com/my/groups/test-group/messages");
        cy.contains('button', 'email address').click()
        cy.get("input").type(email)
        let now = new Date()
        cy.contains('button', 'Next').click()
        cy.mailosaurGetMessage(server, {
            sentTo: email,
        },{
            timeout: 30000, // 30 seconds (in milliseconds)
            receivedAfter: now,
        }).then((email) => {
            let code = email.subject.split(" ")[0]
            cy.get("input").type(code)
        });
        cy.contains('button', 'Next').click()
        cy.contains('button', 'Log in as Cypress').click()
        cy.contains('button', 'Skip').click()
        cy.contains('h1', "Messaging").should('exist')
    }, {
        cacheAcrossSpecs: true
    })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
