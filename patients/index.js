$(document).ready(function(){



$('form').submit(function (e){

   console.log($("form").serializeArray());
    e.preventDefault();


     $.each(x, function(i, field){
         $("#results").append(field.name + ":" + field.value + " ");
     });
});

//form

});
