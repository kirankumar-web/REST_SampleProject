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

    def test_three(self4):

    # Set the base URL
       base_url = "http://localhost:3002"

# Create the request headers
       headers = {"Content-Type": "application/json"}

# Create the request body
       request_body = {
    "items": "3",
    "price": "13333",
    "paymentinfo": "debit card"
}

# Send the PATCH request
       response = requests.patch(base_url + "/orders/id{}".format("645dfff05297e0ddc6ce27f9"), json=request_body)

# Get the response status code
       status_code = response.status_code
       print("Status Code:", status_code)

# Get the response time
       response_time = response.elapsed.total_seconds()
       print("Response Time:", response_time)

# Get the response body
       response_body = response.json()
       print("Response Body:", response_body)
   
if __name__ == '__main__':
    unittest.main()
