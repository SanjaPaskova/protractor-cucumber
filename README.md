Prerequisites
Protractor is a Node.js program. To run, you will need to have Node.js installed. You will download Protractor package using npm, which comes with Node.js. Check the version of Node.js you have by running node --version. Then, check the compatibility notes in the Protractor README to make sure your version of Node.js is compatible with Protractor.

Setup
Use npm to install Protractor globally with:

# npm install -g protractor
This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

# webdriver-manager update

Clone the project and run command

#npm install 

Unzip and place Selenium folder that I send you in email in webdriver-manager folder 

{location where projec is downloaded}/node_modules/protractor/node_modules/webdriver-manager

Run tests with command

#npm run e2eFoldersLabels


Explanation about Project : 

All helpers are placed in components/html and misc-utils 

All cucumber features are placed in features folder

Reports are generated in report folder and command for generating report is 

#node report/index.js

all page object files are placed in page-objects/pages folder

all constants for specific page are placed in {pageName}-page.constant.ts 

all methods are placed in {pageName}-page.helper.ts

all objects are place in {pageName}.po.ts

All step definition files are place in steps folder





