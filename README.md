\# Playwright Test Automation for Translating Singlish to Sinhala 



The purpose of this repository is to provide an automated testing framework using Playwright to validate the functionality, stability and UX of the SwiftTranslator Singlish to Sinhala translation application. 



\## Project Overview



The purpose of this project is to validate that the translator:

\- Accepts valid Singlish input

\- Responds to user via UI without error

\- Handles invalid / malformed input gracefully

\- Provides UI stability while user is interacting with it in real-time



As language translation is inherently dynamic, the tests do not validate specific translated text, but rather test for reliable and observable behaviour in the system.



\## Types of tests covered

1\. \*\*Positive Functional Tests\*\* - Tests for correct handling of valid Singlish inputs.

2\. \*\*Negative Functional Tests\*\* - Tests that the system remains stable when invalid or malformatted input is provided.

3\. \*\*UI Tests\*\* - Tests for real-time responsiveness and visibility of translation panels.



\## Used tools and technologies

\- Playwright

\- JavaScript

\- Node.js

&nbsp; 

\## How the tests are run



For each test case:

1\. Open the SwiftTranslator website.

2\. Input Singlish text into the input field.

3\. Validate successful acceptance of input.

4\. Confirm the visibility of the Sinhala output panel.

5\. Verify that the application does not crash / behave unexpectedly.



Using this approach enables reliable test automation consistent with the actual behaviour of the application. 



\## How to run the tests

\### Install Packages

```bash

npm install 

npx playwright test 

```

