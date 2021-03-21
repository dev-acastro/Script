$(document).ready(function(){



$("form").submit(function (e){
    e.preventDefault();

    var UserData = $("form").serializeArray();

    var data = [];

     $.each(UserData, function(i, field){
         data[field.name] = field.value;
     });


     postPatient( JSON.stringify(data), auth());


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



function postPatient(data, token) {

            $.ajax({
                method: 'POST',
                url: "https://prod.hs1api.com/ascend-gateway/api/v1/patients",
                // headers: {
                //     "Organization-ID": "5e7b7774c9e1470c0d716320",
                //     "Authorization": "Bearer "+token,
                // },

                beforeSend: function (request) {
                    request.setRequestHeader("Organization-ID", "5e7b7774c9e1470c0d716320")
                    request.setRequestHeader("Authorization", "Bearer "+token)
                    request.setRequestHeader('Access-Control-Allow-Origin', "*")
                },

                data: data,
                success: function (response) {
                    console.log(response)
                },
                error: function (e){
                    console.log(e);
                }


            });

}

//form

});
