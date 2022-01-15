import axios from 'axios';

const BASE_URL = "https://cms.vendoo.ge/api/customer/"
const REGISTRATION = 
    {
    "firstname": "sd",
    "lastname": "qw",
    "username": "sd@gmail.com",
    "birthdate": "1999-07-15",
    "phone": "334222111",
    "password": "asdasd`13",
    "gender": "1",
    "confirm_password": "asdasd`13",
    "code": "",
    "terms": true,
    "gRecaptchaResponse": "03AGdBq27OcIeugvmjijipM8NDWy4jaBk8hAJsAYj4q7nKfBvu14PzgcsxIholgD6U8ROBgu848Q8fTNRrdpbjOPZ07osCEGgnav3HdEYyhYC7JkmNh-oxxHyVD3ccy2-sk0Jdb7pPcIVnn9AdIBJScLvFXaB0xDMvo-c4QAbKaSDubCxpgKQoaYoR1jxB7JA6CGHKSr6rrrF13bC6QKtSlVkk6S4AqnsphXBYseDdyW37D_MIBSfeAv56Kj3EnwQNQ3XBH5v5NL6WN45Neg8BOpbIma3y2hqdCV-40TT9EuJ2Lvakdv-ArwfP4vLL1MWbghOANQwllYKQHFrnQ25Pv1ezha39X5EMN0ub8s6qiPqm88FE6C_HtzOfz1wnn0BjFLncisDGdd-exchsZBWiw7A_zjaH2qlmCx8whM-XwG-rxqFUzKdAXbQVydoFVfZYBTlc1gyq00pG"
}

class AuthorizationService {


    getTopItems = async () =>{
       return await axios.get("https://cms.vendoo.ge/api/promo/catalog/products?key=uiafesi&group_url_path=%2Ftop&page=1&sort_item=price&sort_dir=desc")
    }


    Register = async (firstname,lastname,username,birthdate,phone,password,gender,
        confirm_password,code,terms,gRecaptchaResponse) => {
        const url_path = "registration"
        

        return await axios.post(BASE_URL + url_path,{firstname,lastname,username,birthdate,phone,password,gender,
        confirm_password,code,terms,gRecaptchaResponse})
    }

    LogIn = async (username,password) => {
        
        const url_path = "login"
        
        return await axios.post(BASE_URL + url_path,{password: password,
        username: username})
    }

    SignUp = async (username,password) => {
        const url_path = "registration"
        return await axios.post(BASE_URL + url_path,{password: password,
            username: username})
    }
}
export default AuthorizationService;

