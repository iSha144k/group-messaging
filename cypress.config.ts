import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require("fs");
import dotenv from 'dotenv';
dotenv.config();


function createReportJsonMeta(results) {
    fs.writeFileSync(
        "./cypress/results/metadata.json",
        JSON.stringify(
            {
                browserName: results.browserName,
                browserVersion: results.browserVersion,
                osName: results.osName,
                osVersion: results.osVersion,
                nodeVersion: results.config.resolvedNodeVersion,
                cypressVersion: results.cypressVersion,
                startedTestsAt: results.startedTestsAt,
                endedTestsAt: results.endedTestsAt,
            },
            null,
            "\t"
        )
    );
}

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    await addCucumberPreprocessorPlugin(on, config);

    on("file:preprocessor",
        preprocessor(config, {
            typescript: require.resolve("typescript"),
        })
    );
    on("after:run", async (results) => {
        if (results) {
            createReportJsonMeta(results);
            let sourcePath = "./cypress/results/";
            let oldExtension = "metadata.json";
            let newExtension =
                results.browserName + "." + new Date().getTime() + ".json";
            fs.readdir(sourcePath, (err, files) => {
                if (err) {
                    cy.log("Issue in the file reading");
                    return;
                }

                files.forEach((file) => {
                    const oldFilePath = `${sourcePath}/${file}`;

                    if (file.endsWith(`.${oldExtension}`)) {
                        const newFilePath = `${sourcePath}/${file.replace(
                            `.${oldExtension}`,
                            `.${newExtension}`
                        )}`;
                        fs.rename(oldFilePath, newFilePath, (err) => {
                            if (err) {
                                cy.log("Issue in the file renaming");
                            }
                        });
                    }
                });
            });
        }
    });    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

export default defineConfig({
    projectId: process.env.CYPRESS_PROJECT_ID,
    video: false,
    reporter: "json",
    e2e: {
        baseUrl: "https://christ-ministry-420749.churchcenter.com",
        specPattern: "**/*.feature",
        setupNodeEvents,
        defaultCommandTimeout: 10000,
        testIsolation: false,
    },
    env: {
        MAILOSAUR_SERVER: process.env.MAILOSAUR_SERVER,
        MAILOSAUR_EMAIL: process.env.MAILOSAUR_EMAIL,
        MAILOSAUR_API_KEY: process.env.MAILOSAUR_API_KEY,
        CYPRESS_RECORD_KEY: process.env.CYPRESS_RECORD_KEY
    },
});
