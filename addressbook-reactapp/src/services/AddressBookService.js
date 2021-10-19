import axios from "axios";

const URL = "http://localhost:8080/addressbook";

class AddressBookService {
    // post 
    createAddress(address){
        return axios.post(`${URL}/create`,address);
    }

    //get all records
    getAllAddresses(){
        return axios.get(`${URL}/get`);
    }

    //delete
    deleteAddress(id){
        return axios.delete(`${URL}/delete/${id}`);
    }

    getAddressById(id){
        return axios.get(`${URL}/update/${id}`);
    
    }
    updateAddress(newAddress, id){
        return axios.put(`${URL}/update/${id}`,newAddress);
    }
}

export default new AddressBookService();