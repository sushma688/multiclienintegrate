import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:5000/multiclient/customer";

class CustomerService {

    getAllCustomer(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    getCustomerById(id){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + id);
    }

    updateCustomer(customer){
        return axios.put(CUSTOMER_API_BASE_URL + '/' + customer);
    }

    deleteCustomer(id){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + id);
    }
}

export default new CustomerService();