$(document).ready(function(){



$("form").submit(function (e){

    var UserData = $("form").serialize();


  // var s = JSON.stringify(UserData);



  // var firstName = $("#firstName").val();
   console.log(UserData);
    e.preventDefault();

     // $.each(UserData, function(i, field){
     //     $("#results").append(field.firstName + ":" + field.lastName + " ");
     //     console.log(i + "" + field);
     // });
});

//form

});
