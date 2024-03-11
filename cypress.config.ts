import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");
import dotenv from 'dotenv';
dotenv.config();

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    await addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        preprocessor(config, {
            typescript: require.resolve("typescript"),
        })
    );

    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

export default defineConfig({
    e2e: {
        baseUrl: "https://duckduckgo.com",
        specPattern: "**/*.feature",
        setupNodeEvents,
        defaultCommandTimeout: 10000,
        testIsolation: false,
    },
    env: {
        MAILOSAUR_SERVER: process.env.MAILOSAUR_SERVER,
        MAILOSAUR_EMAIL: process.env.MAILOSAUR_EMAIL,
        MAILOSAUR_API_KEY: process.env.MAILOSAUR_API_KEY,
    },
});
