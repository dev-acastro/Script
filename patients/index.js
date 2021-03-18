$(document).ready(function(){



$('#patientForm').submit(function (e){

    var x = $("#patientForm").serializeArray();
    e.preventDefault();


    $.each(x, function(i, field){
        $("#results").append(field.name + ":" + field.value + " ");
    });
});

//form

});
