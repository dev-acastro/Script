"use strict"

$(document).ready(function(){

    var dataExample = {
        firstName: "Arturo",
        lastName: "Miguel",
        address1: "Av. Masferrer 163 B Col. Campestre",
        city: "San Salvador",
        state: "CA",
        postalCode: "0000",
        gender: "M",
        dateOfBirth: "2021-03-03"
    }

    postPatient(JSON.stringify(dataExample));

/*$("form").submit(function (e){
    e.preventDefault();

    var UserData = $("form").serializeArray();

    var data = [];

     $.each(UserData, function(i, field){
         data[field.name] = field.value;
     });

    var dataExample = {
        firstName: "Arturo",
        lastName: "Miguel",
        address: "Av. Masferrer 163 B Col. Campestre",
        city: "San Salvador",
        state: "CA",
        postalCode: "0000",
        gender: "M",
        dateOfBirth: "2021-03-03"
    }
     postPatient(JSON.stringify(dataExample), auth());
});*/

    /*function auth (){

        var token ="";

         $.ajax({
            type: 'POST',
            url: "https://prod.hs1api.com/oauth/client_credential/accesstoken?grant_type=client_credentials",
            data: {
                "client_id": "kdqoHWRZ1YB5M99QVrtc9p4v2kxSct89",
                "client_secret": "IqHYGkvrsN7eFfRe"
            },
            beforeSend: function (request) {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            },
            success: function (response) {
                token = response.access_token;
            }
        });

         console.log(token)
        return token;
    }*/



function postPatient(data) {

            var token = auth();


            $.ajax({
                method: 'POST',
                url: "https://prod.hs1api.com/ascend-gateway/api/v1/patients",
                crossDomain: true,
                headers: {
                    "Authorization" : "Bearer " + token,
                    "Organization-Id" : "5e7b7774c9e1470c0d716320",
                },
                data: data,
                dataType: "json",
                success: function (response) {

                },
                error: function (e){

                }


            });

}



});

