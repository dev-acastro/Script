

class Authorization {



    getAuthorization(){
        $.ajax({
            type: 'POST',
            url: "https://prod.hs1api.com/oauth/client_credential/accesstoken?grant_type=client_credentials",
            data: {
                "client_id": "kdqoHWRZ1YB5M99QVrtc9p4v2kxSct89",
                "client_secret" : "IqHYGkvrsN7eFfRe"
            },

            beforeSend: function (request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            },
            success: function (response) {
                console.log(response.access_token);
                return response.access_token;

            }


        });

    }
}

export default Authorization;