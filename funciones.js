/*
* Autorizacion
* */

var token;
$(document).ready(function(){



    function tokenCallback(response){
        token = response;
        console.log(token)

    }

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
            tokenCallback(response.access_token);
        }


    });
})



function ajaxCall(endpoint, method, id="", data=""){

}


/*
*
* Funciones de Citas
*
* */

// Get Appointment

function callback (response){

    console.log(response)
    return response;

}


function getAllAppointments(){

    $.ajax({
        method: 'GET',
        url: "https://prod.hs1api.com/ascend-gateway/api/v1/appointments",
        crossDomain: true,
        headers: {
            "Authorization" : "Bearer " +token,
            "Organization-Id" : "5e7b7774c9e1470c0d716320",
        },
        dataType: "json",
        success: function (response) {
            callback(response)

        },
        error: function (e){
            console.log(e)

        }


    });



}

function getAppointment(id){

    $.ajax({
        method: 'GET',
        url: "https://prod.hs1api.com/ascend-gateway/api/v1/appointments",
        crossDomain: true,
        headers: {
            "Authorization" : "Bearer " +token,
            "Organization-Id" : "5e7b7774c9e1470c0d716320",
        },
        dataType: "json",
        success: function (response) {
            callback(response)

        },
        error: function (e){
            console.log(e)

        }


    });



}

function saveAppointment(data){

    $.ajax({
        method: 'GET',
        url: "https://prod.hs1api.com/ascend-gateway/api/v1/appointments",
        crossDomain: true,
        headers: {
            "Authorization" : "Bearer " +token,
            "Organization-Id" : "5e7b7774c9e1470c0d716320",
        },
        dataType: "json",
        success: function (response) {
            callback(response)

        },
        error: function (e){
            console.log(e)

        }


    });



}

function updateAppointment(id, data){

    $.ajax({
        method: 'GET',
        url: "https://prod.hs1api.com/ascend-gateway/api/v1/appointments",
        crossDomain: true,
        headers: {
            "Authorization" : "Bearer " +token,
            "Organization-Id" : "5e7b7774c9e1470c0d716320",
        },
        dataType: "json",
        success: function (response) {
            callback(response)

        },
        error: function (e){
            console.log(e)

        }


    });



}

getAllAppointments();

