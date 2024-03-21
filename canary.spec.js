/**
 * Enter the data-testid for each form element (if it exists)
 *
 * <form data-testid="yeet">
 *  <input type="text" data-testid="contact-form-name-input" name="name"><br>
 *  <input type="text" data-testid="contact-form-email-input" name="email"><br>
 *  <input type="text" data-testid="contact-form-message-input" name="message"><br>
 *  <input type="submit" data-testid="contact-form-submit-btn" />
 * </form>
 */

const config = {
  contactPageUrl: 'https://spencerlepine.com', // https://spencerlepine.github.io/contact.html
  nameInputDataTestId: 'contact-form-name-input',
  emailInputDataTestId: 'contact-form-email-input',
  messageInputDataTestId: 'contact-form-message-input',
  submitBtnDataTestId: 'contact-form-submit-btn',
};

describe('Contact form submission', () => {
  it('should fill out the form and submit it', () => {
    cy.visit(config.contactPageUrl);

    // Fill out the form fields
    cy.get(`[data-testid="${config.nameInputDataTestId}"]`).type('CanaryName');
    cy.get(`[data-testid="${config.emailInputDataTestId}"]`).type('email@canary.com');
    cy.get(`[data-testid="${config.messageInputDataTestId}"]`).type('Portfolio Contact Form is still working!');

    // Submit the form
    cy.get(`[data-testid="${config.submitBtnDataTestId}"]`).click();

    // Wait for page to load after submission
    cy.wait(4000);
  });
});
