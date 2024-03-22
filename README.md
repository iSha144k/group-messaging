# Group Messaging

## Automated Test Plan
Please review the [latest run](https://isha144k.github.io/group-messaging/cypress/reports/index.html) of the test plan to review the plan details. 

To rerun the tests
1. Visit the [Generate Cypress Report](https://github.com/iSha144k/group-messaging/actions/workflows/generate-report.yml) Github Action
2. Click run workflow
3. Click run workflow again 
4. Wait for work flow to finish 
5. Review the results of the [latest run](https://isha144k.github.io/group-messaging/cypress/reports/index.html)

To run the automated tests on a different environment, please follow the following steps below 

## Setting up your own environment
### Set up Mailosaur
1. Set up email 
2. Create a new .env file in the root directory 
3. Copy the .env-example into the .env file
4. Sign up or [Sign in](https://mailosaur.com/app/signup?utm_source=12268604321-121041863201-mailosaur&gad_source=1&gclid=CjwKCAjw17qvBhBrEiwA1rU9w5WbRqAzMS21BMCRjhR5o-VZp9iCKn5a22ozBSmKgAa_NpYSe9aOxhoCTD4QAvD_BwE) to your account
5. Add your [api key](https://mailosaur.com/app/account/keys) to the .env file
6. Click on your desired [sever](https://mailosaur.com/app/servers)
7. Copy the server id at the top of the page and paste it in the .env file 
8. Copy the email at the top of the page and paste it in the .env file

### Set up Planning Center
1. Create an account in the Planning Center
2. Ensure you can be accessed on Church Center
3. Go to the groups application and create a group 
4. Go to the group's settings and enable group messaging. 
5. Ensure messaging is available to members and leaders. 
6. Add Group visibility on the Church Center application.
   
### Set up your Church Center application 
1. Visit your church on the Church Center
2. Join the group


### Test Plan
You may review the test plan by examining each of the following files. 
1. [Create](https://github.com/iSha144k/group-messaging/blob/main/cypress/e2e/create.feature)
2. [Manage](https://github.com/iSha144k/group-messaging/blob/main/cypress/e2e/manage.feature)
3. [Reaction and Replies](https://github.com/iSha144k/group-messaging/blob/main/cypress/e2e/replies.feature) 
4. [Permissions](https://github.com/iSha144k/group-messaging/blob/main/cypress/e2e/permissions.feature)

Run `npm run test` to run the tests in the background or `npx cypress open` to run them in a browser. If you are running them in a browser, you may select E2E as the test type and Chrome as the browser.

### Generate Report
Generate the html version of all reports
`npm run report`

### Report Bugs
Please report the bugs on the [bugs](https://dot-almanac-c71.notion.site/deb71ae641be4f0fa250307b5cf46940?v=4740937bc30d4b8a856d24629c2d3a9e&pvs=4) database.
