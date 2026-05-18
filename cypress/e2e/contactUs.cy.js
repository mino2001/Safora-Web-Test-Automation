// Contact Us Test Suite
// This test verifies Contact Us form functionality

import ContactPage from '../pageObjects/ContactPage'

describe('Safora E-commerce - Contact Us Form Automation Suite', () => {

  // Create object from ContactPage class
  const contactPage = new ContactPage()

  // Runs before each test case
  beforeEach(() => {
    contactPage.visit()
  })

  // Test case: valid form submission
  it('TC_012 - Should submit contact form successfully', () => {

    // Step 1: Fill form with valid data
    contactPage.fillForm(
      'Minoshi',
      'minoshi@gmail.com',
      'Hello, I am interested in your products.'
    )

    // Step 2: Submit the form
    contactPage.submitForm()

    // Step 3: Verify success message
    contactPage.verifySuccessMessage()
  })
})