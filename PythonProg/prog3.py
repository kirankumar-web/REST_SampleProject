from time import sleep
from selenium.webdriver.common.by import By
from selenium.webdriver import FirefoxOptions
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from webdriver_manager.firefox import GeckoDriverManager

options = Options()
driver = webdriver.Firefox(executable_path=GeckoDriverManager().install(), options=options)

driver.get("https://google.com")
sleep(1)

# Find the searchbox and send "hello world"
searchbox_element = driver.find_element(By.NAME, "q")
searchbox_element.send_keys("hello world\n")

sleep(2)

driver.quit()
