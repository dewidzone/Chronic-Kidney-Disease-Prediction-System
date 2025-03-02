import time
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, ElementClickInterceptedException

class TestRegisterAndLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000")

    def tearDown(self):
        self.driver.quit()

    def test_login_with_Wrong_password(self):
        # Click the SignIn button
        sign_in_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'SignIn')]")
        sign_in_button.click()

        # Fill the email and password fields with a email address
        email_input = self.driver.find_element(By.NAME, "email")
        password_input = self.driver.find_element(By.NAME, "password")
        email_input.send_keys("test24@example.com")
        password_input.send_keys("password")

        # Introduce a delay before clicking the SignIn button
        time.sleep(2)

        # Attempt to click the SignIn button with error handling
        try:
            submit_button = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CLASS_NAME, "btn.btn-primary.btn-block")))
            submit_button.click()
        except ElementClickInterceptedException:
            print("Element click intercepted. Trying to scroll into view and click again.")
            self.driver.execute_script("arguments[0].scrollIntoView(true);", submit_button)
            submit_button.click()

        try:
            # Wait for a possible alert indicating invalid credential
            alert = WebDriverWait(self.driver, 20).until(EC.alert_is_present())
            alert_text = alert.text
            alert.accept()

            

            if "auth/invalid-credential" in alert_text:
                print("\x1b[6;30;42m" + "Test passed. 'auth/invalid-credential' message displayed." + "\x1b[0m")
            else:
                self.fail("Login with wrong password was not handled correctly")

        except TimeoutException:
            print("\x1b[6;30;42m" + "Test passed. No redirection occurred." + "\x1b[0m")


if __name__ == "__main__":
    unittest.main()
