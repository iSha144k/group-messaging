# Group Messaging

## Automated Test Plan
Please review the [latest run](https://isha144k.github.io/group-messaging/cypress/reports/index.html) of the test plan to review the plan details. 

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
#### Objectives
1. The objective of the test plan is to ensure the group messaging feature provides seamless communication amongst church congregants and leaders.
2. This test plan assumes that the software currently runs on a stable build with no active defects. It uses the current state of the software  and [Group Messaging on Church Center](https://pcochurchcenter.zendesk.com/hc/en-us/articles/18759550045467-Group-Messaging-on-Church-Center#create-a-new-topic-0) as the requirements.


#### Risks
|         Risk         |                                                                                         Mitigation                                                                                         |
|:--------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Low Staff            | There is only one tester executing these tests. The plan will incorporate test automation to expedite execution.                                                                           |
| Limited Devices      | There is only one device available to execute all tests. Therefore, we will use software that can simulate different operating systems.                                                    |
| No Budget            | There is no budget for this test plan as it is simply an exercise. The test plan will only utilize tools that are open source.                                                             |

#### Scope 
**Test Level**|**Test Item**|**Description**|**Scheule**
:-----:|:-----:|:-----:|:-----:
Functional|Creation |As a user, I want to create a message so that I can relay information to my congregation. |Sprint 1
Functional|Management|As a user, I want to have some control of the messages so that it can best suit my needs  |Sprint 1
Functional|Reactions|As a user, I want to be able to interact with messages that I receive so that I can confirm receipt of information. |Sprint 1
Non Functional|Security |Ensure messages are only submitted by authorized users|Sprint 2
Non Functional|Stress Testing|Ensure that a message remains accessible in the event of a high number of reactions and replies |Sprint 2

#### Out of Scope
1. Groups features outside of Church Center application
2. Groups features not associated with messaging (i.e. Events, Resources, etc.)
3. Church Center features not associated with messaging.
You may review the test plan by examining each of the following files. 

#### Environment 

##### Functional Tests 
**Name**|**Operating System**|**Browser**
:-----:|:-----:|:-----:
windows-chrome|Windows|Chrome
windows-firefox|Windows|Firefox
windows-edge|Windows|Edge



##### Security Tests

**Messaging**|**Permission Level**|**Test User Role**
:-----:|:-----:|:-----:
disabled |N/A|leader
disabled|N/A|member
enabled |leader|leader
enabled |leader|member
enabled|all|leader
enable|all|member    

#### Test Suite
1. [Create](https://github.com/iSha144k/group-messaging/blob/main/cypress/e2e/create.feature)
2. [Manage](https://github.com/iSha144k/group-messaging/blob/main/cypress/e2e/manage.feature)
3. [Reaction and Replies](https://github.com/iSha144k/group-messaging/blob/main/cypress/e2e/replies.feature) 
4. [Permissions](https://github.com/iSha144k/group-messaging/blob/main/cypress/e2e/permissions.feature)


#### Entry Criteria

- [ ]  Administrative access to an account in the Planning Center.
- [ ]  Create the groups required for the security tests
- [ ]  The device has the latest version of the application.

#### Exit Criteria

- [ ]  At least one (1) function deviates from the specifications outlined in the [Group Messaging on Church Center Document](https://pcochurchcenter.zendesk.com/hc/en-us/articles/18759550045467-Group-Messaging-on-Church-Center).
- [ ]  All functions are shown to function without deviation from expected behavior as outlined in the Test Plan.

#### Deliverables
Test report details which tests that passed and failed. If a failure occurred, the step at which the test failed should be indicated on the report. A reference to the bug ticket created should also be included.

### Execution 
1. Visit the [Generate Cypress Report](https://github.com/iSha144k/group-messaging/actions/workflows/generate-report.yml) Github Action
2. Click run workflow
3. Click run workflow again using the main branch
4. Wait for work flow to finish
5. Review the results of the [latest run](https://isha144k.github.io/group-messaging/cypress/reports/index.html)

Run `npm run test` to run the tests in the background or `npx cypress open` to run them in a browser. If you are running them in a browser, you may select E2E as the test type and Chrome as the browser.

### Generate Report
Generate the html version of all reports
`npm run report`

### Report Bugs
Please report the bugs on the [bugs](https://dot-almanac-c71.notion.site/deb71ae641be4f0fa250307b5cf46940?v=4740937bc30d4b8a856d24629c2d3a9e&pvs=4) database.
