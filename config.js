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
  contactPageUrl: 'https://spencerlepine.github.io/contact',
  nameInputDataTestId: 'contact-form-name-input', // optional
  emailInputDataTestId: 'contact-form-email-input', // optional
  messageInputDataTestId: 'contact-form-message-input',
  submitBtnDataTestId: 'contact-form-submit-btn',
};

export default config;
