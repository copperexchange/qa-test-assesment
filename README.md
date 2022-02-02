# QA Automation Tech Test
Technical test using a CodeceptJS framework

## Setup:
Node version is 14.1.0 and NPM version is ^7.  
To check your node version type `node --version`. If this version is inconsistent with the above version, you can change your version with `nvm install 14.1.0`. This will download and change your current node version to 14.1.0. If you did this once and eventually come back to the tests and they are not running properly it might be that your machine has changed back to your default node version, and you will have to run `nvm use 14.1.0`. This command differs from the install command as it has already downloaded that version of node, it just needs to switch your machine over to use that one.  
If you are having issues running the tests where it complains about dependency issues make sure to check your node version.  
Clone repo to your machine and run `npm install`.

## Running Locally
You can use `npm run test @tag` and replace the tag with whatever tag you like to run the tests. Please tag all scenarios you create with @techtest, so if you want to run the whole suite you can use `npm run test @techtest`. All scenarios should be grouped into testable areas and have a unique tag also to just run the tag that you want. 

You can use `npm run pauseOnFail @tag` to do a similar thing as `test` but whenever a test fails it pauses and allows you to view the Chrome browser window before continuing. 

You can use `npm run lint` to detect and fix all linting errors, though it may ask you to correct some things. 

You can use `npm run generateFullReport` to run all of the tests and generate an allure report, though to view this report properly you will need to install the Allure CLI with `npm install -g allure-commandline --save-dev`. Once this is installed and the report has been generated you can "serve" the report with `allure serve test-reports`. This will start a local web server which shows you all of the details of your test report in a really nice and understandable way!

If you are trying to debug the tests every test failure will generate a screenshot which goes to the `tests-output` folder and uses the name of the test scenario. You can either view the screenshot or you can add a `I.wait(100)` if you know where it has failed so you can view the browser in real time. 

## Running through Docker
To run the tests through docker you will need to use this command or a variant of it to ensure that the tests use the docker Codecept config instead of the local codecept config `npm run runAllDocker`. This will run all of the †ests through Docker, though you could add a `--grep` and use a tag for running a specific test in the package JSON and then you would have to modify the Dockerfile, though I would advise against changing much in the Dockerfile as this took days of tweaking to get it working to ensure it runs properly through GoCD.
