export default class Api {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.baseURL = 'http://';
        this.suffixURL = '';
        this.cookie = ''
    }

    async GET(pageFinder, request_body, auth) {
        switch (pageFinder) {
            case 'LIST_CUSTOMER':
                this.suffixURL = 'customer-list';
                break;
        }

        let res = {}
        var myHeaders = new Headers();
        myHeaders.append("Authorization", auth);

        var raw = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        await fetch(this.baseURL + '/' + this.suffixURL, requestOptions)
            .then((response) => {
                const statusCode = response.status;
                const data = response.json();

                return Promise.all([statusCode, data]);
            })
            .then(data => {
                let responseJSON = data[1]
                if (responseJSON.status === "error") {
                    res = { success: false, data: responseJSON, message: responseJSON.message }
                }
                else {
                    res = { data: responseJSON, success: true, message: responseJSON.message }
                }
            })
            .catch((error) => {
                res = { success: false, data: error, message: String(error) }

            })
        console.log(res)
        return res

    }

    async POST(pageFinder, request_body, auth, req_id) {
        switch (pageFinder) {
            case 'SEND_OTP':
                this.suffixURL = 'token';
                break;
            case 'OTP_VERIFICATION':
                this.suffixURL = 'otp-auth';
                break;
            case 'LOCATION_UPDATE':
                this.suffixURL = 'location';
                break;
            case 'SET_PIN':
                this.suffixURL = 'set-pin';
                break;
            case 'LOGIN':
                this.suffixURL = 'login';
                break;
            case 'RESET_OTP':
                this.suffixURL = 'reset-otp';
                break;
            case 'RESET_PIN':
                this.suffixURL = 'reset-pin';
                break;
            case 'CREATE_CUSTOMER':
                this.suffixURL = 'create-customer';
                break;
            case 'EDIT_CUSTOMER':
                this.suffixURL = 'edit-customer/' + req_id + "'";
                break;
        }
        let res = {}
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");
        myHeaders.append("Authorization", auth);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(request_body),
            redirect: 'follow'
        };
        await fetch(this.baseURL + '/' + this.suffixURL, requestOptions)
            .then((response) => {
                const statusCode = response.status;
                const data = response.json();
                return Promise.all([statusCode, data]);
            })
            .then(data => {
                let responseJSON = data[1]
                if (responseJSON.status === "error") {
                    res = { success: false, data: responseJSON, message: responseJSON.message }
                }
                else {
                    res = { data: responseJSON, success: true, message: responseJSON.message }
                }
            })
            .catch((error) => {
                res = { success: false, data: error, }
            })
        console.log(res)
        return res
    }
}

