import requests
import unittest

class RESTFirstTest(unittest.TestCase):
    def test_one(self):
        response = requests.get("http://localhost:3001/products/")
        
        r2 = response.status_code
        print(r2)
        print(response.elapsed.total_seconds())
        t1 = response.elapsed.total_seconds()
        
        print(response.text)
        print(response.status_code)
        print(response.headers.get("content-type"))
        
        self.assertEqual(r2, 200)
        self.assertNotEqual(t1, 1.0)

    def test_two(self) :
        base_url = "http://localhost:3001"
        headers = {"Content-Type": "application/json"}
        request_body = '{"price":"1100"}'

        response = requests.put(base_url + "/products/{id}".format(id="645db84808678aff73ddc642"),
                        headers=headers, data=request_body)

        print(response.status_code)
        print(response.elapsed.total_seconds())
        print(response.text)  
        
    def test_two(self2) :
        base_url = "http://localhost:3001"
        headers = {"Content-Type": "application/json"}
        request_body = '{"name": "oneplus 16r", "price": "2500"}'

        response = requests.post(base_url + "/products", headers=headers, data=request_body)

        print(response.status_code)
        print(response.text)  
    
    def test_three(self3):
        base_url ="http://localhost:3001"
        
        #response = requests.delete("http://localhost:3001/products/64671ed483b3bf1e2aeaaf9f")
        response = requests.delete(base_url + "/products/646720b683b3bf1e2aeaafc9")

        print(response.status_code)
        print(response.elapsed.total_seconds())
        print(response.text)   
        
if __name__ == '__main__':
    unittest.main()
