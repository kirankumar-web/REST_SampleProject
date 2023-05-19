from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

chromedriver_path = '/Users/kirankumaryadav/eclipse/selenium/Actitime_TestNg/Drivers/chromedriver'
service = Service(chromedriver_path)
driver = webdriver.Chrome(service=service)

# Open a website
driver.get('https://www.google.com')

driver.get('https://www.python.org/downloads/release/python-3113/')

driver.back()

driver.implicitly_wait(2)
# Find the element by XPath and send keys
element = driver.find_element(By.XPATH, '//textarea[@id="APjFqb"]')
element.send_keys('facebook')

btn1=driver.find_element(By.XPATH, '(//input[@role="button"])[1]')
btn1.click()

driver.forward()

driver.maximize_window()
driver.fullscreen_window()

driver.minimize_window()

# Close the browser
driver.quit()
