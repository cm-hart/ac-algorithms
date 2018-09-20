$(document).ready(function(){
    function makeMadLib(){
        var noun = $("#noun").val();
        var adjective = $("#adjective").val();
        var person = $("#person").val();
        var sentence = person + " really likes " + adjective + " " + noun + ".";
        $("#story").append("<p>" + sentence + "</p>");
        var object = {};
        object.noun = noun;
        object.adjevtive = adjective;
        object.person = person;
        return object;
    }
    //event listener:
    $("#lib-button").on("click", function(){
        var userObject = makeMadLib();
        console.log(userObject);
    });
});

//for the bonus, have the function return an object as the output