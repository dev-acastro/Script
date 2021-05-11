'use strict';

/*
* Autorizacion
* */

var token;

$.when(
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
        token = response.access_token;
    }


})).then(function (){





    function ajaxCall(endpoint, method, id="", data=""){

    }


    /*
    *
    * Funciones de Citas
    *
    * */

// Get Appointment

    function callback (response){
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
            url: "https://prod.hs1api.com/ascend-gateway/api/v1/appointments/"+id,
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

    ((start = "2021-05-01")=>{

        $.ajax({
            method: 'GET',
            url: "https://prod.hs1api.com/ascend-gateway/api/v1/appointments?filter=start>="+start,
            crossDomain: true,
            headers: {
                "Authorization" : "Bearer " +token,
                "Organization-Id" : "5e7b7774c9e1470c0d716320",
            },
            dataType: "json",
            success: function (response) {
                callback(response);
                makeCalendar(response.data);

            },
            error: function (e){
                console.log(e)

            }


        });



    })();

    function makeCalendar(data){

       data.forEach(function (item, index){
            item.editable = true
        })


        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'timeGridWeek',
            droppable: true,
            height: 700,
            slotMinTime: "08:00:00",
            slotMaxTime: "18:00:00",
            eventResize: eventResize,
            eventDrop: eventDrop,
            events: data,
        });
        calendar.render();
    }

    function saveAppointment(data){

        $.ajax({
            method: 'POST',
            url: "https://prod.hs1api.com/ascend-gateway/api/v1/appointments",
            crossDomain: true,
            headers: {
                "Authorization" : "Bearer " +token,
                "Organization-Id" : "5e7b7774c9e1470c0d716320",
            },
            dataType: "json",
            data: data,
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
            method: 'PUT',
            url: "https://prod.hs1api.com/ascend-gateway/api/v1/appointments/"+id,
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


    function eventResize(object){



        var data = JSON.parse(object.event.extendedProps)
        console.log(typeof (data))





    }

    function eventDrop(object){
        var data = object.event.extendedProps
        data.created = "false"

    }

});





