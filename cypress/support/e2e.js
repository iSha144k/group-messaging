// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import "cypress-mailosaur";
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file

beforeEach( () => {
    cy.login(Cypress.env('MAILOSAUR_EMAIL'), Cypress.env('MAILOSAUR_SERVER'))
})
