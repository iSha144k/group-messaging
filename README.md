# Group Messaging

# Setting up the environment
## Set up Mailosaur
1. Set up email 
2. Create a new .env file in the root directory 
3. Copy the .env-example into the .env file
4. Sign up or [Sign in](https://mailosaur.com/app/signup?utm_source=12268604321-121041863201-mailosaur&gad_source=1&gclid=CjwKCAjw17qvBhBrEiwA1rU9w5WbRqAzMS21BMCRjhR5o-VZp9iCKn5a22ozBSmKgAa_NpYSe9aOxhoCTD4QAvD_BwE) to your account
5. Add your [api key](https://mailosaur.com/app/account/keys) to the .env file
6. Click on your desired [sever](https://mailosaur.com/app/servers)
7. Copy the server id at the top of the page and paste it in the .env file 
8. Copy the email at the top of the page and paste it in the .env file

## Set up Planning Center
1. Create an account in the Planning Center
2. Ensure you can be accessed on Church Center
3. Go to the groups application and create a group 
4. Go to the group's settings and enable group messaging. 
5. Ensure messaging is available to members and leaders. 
6. Add Group visibility on the Church Center application.
   
## Set up your Church Center application 
1. Visit your church on the Church Center
2. Join the group

## Generate Report
Run the test plan
`npm run cy:run`

Consolidate all reports into one
`npm run report:merge`

Generate the html version of all reports
`npm run report:generate`


Alternatively, you may run `npx cypress open`, select e2e, and select Chrome as the browser. Click on each funtion and the tests will run and generate a report. 

## Report Bugs
Please report the bugs on the [bugs](https://dot-almanac-c71.notion.site/deb71ae641be4f0fa250307b5cf46940?v=4740937bc30d4b8a856d24629c2d3a9e&pvs=4) database.
