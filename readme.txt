Prerequistes:
1. Install VS Code
2. Install Node JS
3. Clone the git repo from
4. Opne the terminal from VS code and type below commands
   a. cd westpac-kiwi-saver-clac
   b. npm Install -- This will install all the depdencies if required
5. Go to extensions --> Search for Playwright  ---> Select Playwright test for VS code
6. Press shift+ctrl+p(if windows)/command+p(if Mac) --> enter and select "Test: Install Playwright' and then
    click "OK" 
    Note: Observe that Playwright installation will be triggered

DESIGN IMPLEMENTATION:

Page Object Model (POM): Encapsulates page locators and interactions for better modularity and reusability.
Webelements were separated and maintained in "/Users/deepthiandugula/westpac-kiwi-saver-clac/pages/calculator_page.ts"
Readable assertions: Used `expect()` to make sure the locators are visible before performing any action
