$(document).ready(function(){



$("form").submit(function (e){

    var UserData = $("form").serializeArray();


  // var s = JSON.stringify(UserData);



  // var firstName = $("#firstName").val();
   console.log(UserData);
    e.preventDefault();

    var data = [];

     $.each(UserData, function(i, field){
         data[field.name] = field.value;
     });

     var jsonData = JSON.stringify(data);



     postPatient(jsonData);




});

function postPatient(data) {



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

            var access_token = response.access_token ;
            $.ajax({
                method: 'POST',
                url: "https://prod.hs1api.com/ascend-gateway/api/v1/patients",
                headers: {
                    "Organization-ID": "5e7b7774c9e1470c0d716320",
                    "Authorization": "Bearer BMui7AvkRGC9OZQ8joJG2G8CaSTI",
                    // "Accept": "application/json",
                    // "Content-Type": "application/json",
                    //"Access-Control-Allow-Origin" : "*",
                   "Access-Control-Allow-Headers": "x-requested-with"
                },
                // crossDomain: true,
                // xhrFields: {
                //     withCredentials: true
                // },
                data: data,
                success: function (response) {
                    console.log(response)
                },
                error: function (e){
                    //console.log(e);
                }

            });
        }


    });
}

//form

});
