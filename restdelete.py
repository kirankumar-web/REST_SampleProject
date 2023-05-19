import requests
import unittest

class RESTFirstTest(unittest.TestCase):

    def test_three(self3):
        base_url ="http://localhost:3001"
        
        #response = requests.delete("http://localhost:3001/products/64671ed483b3bf1e2aeaaf9f")
        response = requests.delete(base_url + "/products/646720ad83b3bf1e2aeaafc5")

        print(response.status_code)
        print(response.elapsed.total_seconds())
        print(response.text)  
        
if __name__ == '__main__':
    unittest.main()
        