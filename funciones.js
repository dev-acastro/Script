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

    ((start = "2021-01-01")=>{

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
                callback(response)
                makeCalendar();

            },
            error: function (e){
                console.log(e)

            }


        });



    })();

    function makeCalendar(){
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            dateClick: () => { alert("cliek")},
            initialView: 'timeGridWeek',
            droppable: true,
            eventChange : onFunction(),
            events: [
                { // this object will be "parsed" into an Event Object
                    id: 12345,
                    editable: true,
                    title: 'Titulo', // a property!
                    start: '2021-05-03T12:30:00', // a property!
                    end: '2021-05-03T14:30:00' // a property! ** see important note below about 'end' **
                },
                { // this object will be "parsed" into an Event Object
                    id: 12345,
                    editable: true,
                    title: 'Titulo', // a property!
                    start: '2021-05-04', // a property!
                    end: '2021-05-05' // a property! ** see important note below about 'end' **
                },
                { // this object will be "parsed" into an Event Object
                    id: 12345,
                    editable: true,
                    title: 'Titulo', // a property!
                    start: '2021-05-05', // a property!
                    end: '2021-05-06' // a property! ** see important note below about 'end' **
                }
            ]
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


    function onFunction(){
        alert("Hola");
    }

});





