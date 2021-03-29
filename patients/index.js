

$(document).ready(function(){

    auth();


    function getDataForm(e){
        e.preventDefault();

        var userData = $(this).serializeArray();

        var data = [];

        $.each(UserData, function(i, field){
            data[field.name] = field.value;
        });

        console.log(userData);
    }

    function auth (){

      //  var token ="";

         $.ajax({
            type: 'GET',
            url: "http://icjmedia.org/api/",
            success: function (response) {
                console.log(response)
            }
        });


    }

function getPatients(){
    $.ajax({
        method: 'GET',
        url: "https://prod.hs1api.com/ascend-gateway/api/v1/patients",
        crossDomain: true,
        headers: {
            "Authorization" : "Bearer EInjlHiva9gYTmmcPU34vaC3f6YF" ,
            "Organization-Id" : "5e7b7774c9e1470c0d716320",
        },        
        dataType: "json",
        success: function (response) {

        },
        error: function (e){

        }


    });
}



function postPatient(data) {


            $.ajax({
                method: 'POST',
                url: "https://prod.hs1api.com/ascend-gateway/api/v1/patients",
                crossDomain: true,
                headers: {
                    "Authorization" : "Bearer EInjlHiva9gYTmmcPU34vaC3f6YF" ,
                    "Organization-Id" : "5e7b7774c9e1470c0d716320",
                },
                data: data,
                dataType: "json",
                success: function (response) {
                    console.log(response);
                },
                error: function (e){

                }


            });

}



});

