import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestRegisterAndLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000")

    def tearDown(self):
        self.driver.quit()

    def test_login(self):
        # Click the SignIn button
        Sign_Up_btn = self.driver.find_element(By.XPATH, "//button[contains(text(), 'SignUp')]")
        Sign_Up_btn.click()

        # Fill the email and password fields with a new email address
        email_input = self.driver.find_element(By.NAME, "email")
        password_input = self.driver.find_element(By.NAME, "password")
        email_input.send_keys("test23@example.com")
        password_input.send_keys("password123@@")

        # Click the SignIn button
        submit_button = self.driver.find_element(By.CLASS_NAME, "btn.btn-primary.btn-block")
        submit_button.click()

        # Wait for navigation to home page
        WebDriverWait(self.driver, 10).until(EC.url_contains("/home"))
        print("\x1b[6;30;42m" + "Test passed. Redirected to home page." + "\x1b[0m")


if __name__ == "__main__":
    unittest.main()
