import requests
import unittest
class RESTFirstTest(unittest.TestCase):

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
