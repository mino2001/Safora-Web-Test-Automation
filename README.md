# Safora E-commerce Automation Testing Project (Cypress)

## Project Overview

This project was developed as part of a QA Engineering Intern assignment.
The main goal of this project is to automate the "Contact Us" form functionality of the Safora e-commerce website using Cypress automation tool.

This project follows the Page Object Model (POM) design pattern to make the test scripts clean, reusable, and easy to maintain.

---

## Website Under Test

* Main Website: [https://safora.se](https://safora.se)
* Contact Page: [https://safora.se/en/contact.html](https://safora.se/en/contact.html)

---

## Objective of the Project

The main objectives of this automation project are:

* Verify Contact Us form functionality
* Automate form submission process
* Validate success confirmation message
* Improve test reliability using automation
* Use Page Object Model (POM) for better structure

---

## Tools & Technologies Used

* Cypress (Test Automation Framework)
* JavaScript (Programming Language)
* Node.js (Runtime Environment)
* VS Code (Code Editor)
* Page Object Model (POM Design Pattern)

---

## Project Structure

```
Safora-Cypress-Automation/
│
├── cypress/
│   ├── e2e/
│   │   └── contactUs.cy.js
│   │
│   ├── pageObjects/
│   │   └── ContactPage.js
│   │
│   └── screenshots/
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Test Scenario (TC_012)

### Test Case: Verify Contact Us Form Submission

### Test Steps:

1. Open Contact Us page
2. Enter valid name
3. Enter valid email address
4. Enter message
5. Click submit button
6. Verify success confirmation message

### Expected Result:

The system should successfully submit the form and display a success message:

"Your message has been sent successfully"

---

## Page Object Model (POM)

This project uses Page Object Model design pattern.

### Why POM is used:

* Better code structure
* Easy maintenance
* Reusable methods
* Cleaner test cases

---

## How to Install the Project

### Step 1: Install dependencies

```bash
npm install
```

---

## How to Run the Tests

### Run tests in Cypress UI mode

```bash
npx cypress open
```

### Run tests in Headless mode

```bash
npx cypress run
```

### Run specific test file

```bash
npx cypress run --spec "cypress/e2e/contactUs.cy.js"
```

---

## Test Execution Result

During execution:

* Cypress opens browser or runs headless
* Form is filled automatically
* Form is submitted
* Success message is validated
* Test result is shown as PASS or FAIL

---

## Key QA Concepts Used

* UI Automation Testing
* Functional Testing
* Assertion Handling
* Page Object Model (POM)
* Test Reusability
* Basic Debugging Techniques

---

## Challenges Faced

During development, the following challenges were handled:

* Handling dynamic success messages
* Page loading synchronization issues
* Ensuring stable selectors

These were resolved using:

* Proper waits
* Cypress assertions
* Stable DOM selectors

---

## Learning Outcomes

This project helped improve the following QA skills:

* Cypress automation testing
* Writing structured test cases
* Understanding POM design pattern
* Handling UI automation challenges
* Debugging failed test cases

---

## Future Improvements

* Add negative test cases
* Add invalid email validation tests
* Add empty field validation tests
* Add test reporting tools
* Add CI/CD pipeline integration

---

## Conclusion

This project demonstrates a basic but professional QA automation framework using Cypress.

The Contact Us form was successfully automated using Page Object Model design pattern.

All test cases are passing successfully, proving that the automation flow is stable and reliable.

---

## Author

D. S. M. Silva
QA Engineering Intern Candidate
Project: Safora E-commerce Automation Testing Project
