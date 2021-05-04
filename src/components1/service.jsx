import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:5000/adminvalidate";
const USER_API_BASE_URL = "http://localhost:5000/uservalidate";
class Service {

    getAdmin(emailId,password){
        return axios.get(ADMIN_API_BASE_URL+'/adminget/'+emailId+'/'+password);
    }
    getUser(emailId,password){
        return axios.get(USER_API_BASE_URL+'/userget/'+emailId+'/'+password);
    }
    getAdminUserId(id){
        return axios.get(ADMIN_API_BASE_URL+'/getuserid/'+id);
    }

    createAdminData(data){
        return axios.post(ADMIN_API_BASE_URL+'/adminregister', data);
    }

    createUserData(data){
        return axios.post(USER_API_BASE_URL+'/userregister', data);
    }

   
}

export default new Service()