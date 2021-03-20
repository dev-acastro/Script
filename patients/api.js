
$(document).ready(function(){

    $("form").submit(function (e){

        var UserData = $("form").serializeArray();

        e.preventDefault();

        var data = [];

        $.each(UserData, function(i, field){
            data[field.name] = field.value;
        });

        var jsonData = JSON.stringify(data);


        var atoken = auth();
        postPatient(jsonData, atoken);




    });

    function auth (){
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

    function postPatient(data, atoken) {

            const url = "https://prod.hs1api.com/ascend-gateway/api/v1/patients";
            const options = {
                method: "POST",
                headers: {
                    "Authorization": "Bearer "+ atoken,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin' : "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: data,
            };
            fetch(url, options).then(
                response => {
                    if (response.ok) {
                       // return response.text();
                        console.log(response)
                    }
                    // return response.text().then(err => {
                    //     return Promise.reject({
                    //         status: response.status,
                    //         statusText: response.statusText,
                    //         errorMessage: err,
                    //     });
                    // });
                })
                .then(datas => {
                    console.log(datas);
                })
                .catch(err => {
                    console.error(err);
                });



    }



});