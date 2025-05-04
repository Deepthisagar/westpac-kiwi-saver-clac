---Prerequistes:
1. Install VS Code
2. Install Node JS
3. Clone the git repo from https://github.com/Deepthisagar/westpac-kiwi-saver-clac/tree/main
4. Opne the terminal from VS code and type below commands
   a. cd westpac-kiwi-saver-clac
   b. npm Install -- This will install all the depdencies if required
5. Go to extensions --> Search for Playwright  ---> Select Playwright test for VS code
6. Press shift+ctrl+p(if windows)/command+p(if Mac) --> enter and select "Test: Install Playwright' and then
    click "OK" 
    Note: Observe that Playwright installation will be triggered

---Design implementation and Structure:---
1.This project follows the Page Object Model (POM) design pattern. Locators and related methods are encapsulated within 
pages/calculator_page.ts to ensure maintainability.
2.I utilized Playwright’s recommended locator strategies such as getByRole and getByText wherever applicable for better readability.
In more complex scenarios, I resorted to using XPath for accurate element targeting.
3.To improve maintainability, especially when UI text may change, a separate method is created(getElementsByTextAndClick).
This allows for quick updates without modifying the page object files.
4.Assertions using Playwright's expect are applied before performing actions like click to ensure the elements are visible and interactable,
thereby improving test reliability.
5.The test suite is configured to run on Chromium (Chrome), WebKit (Safari), and Firefox, covering major browser engines for cross-browser compatibility.
6.An HTML report of the test execution is generated automatically and can be found at:
playwright-report/index.html
7.All test cases are implemented in the file:
tests/projectionEstimation.spec.ts

---To run the test:---
open the terminal in VScode and run the below script:
npm run test 

Result:
Projection estimate is printed to the console


