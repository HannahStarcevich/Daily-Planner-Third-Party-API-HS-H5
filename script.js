$("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm'));
todosInLocalStorage = localStorage.getItem("userameAndHighScore");


// based on the currect time, update the color of the rows in the middle column to indicate past, present and future 
var currentHour = moment().format('HH')
currentHour = "10";
console.log(currentHour);

var arrayOfInputs = $(".todo-input")

for (var i = 0; i < arrayOfInputs.length; i++) {
    console.log(arrayOfInputs[i]);
    var arrayId = $(arrayOfInputs[i]).attr("id")

    console.log(arrayId);
    if (parseInt(currentHour) === parseInt(arrayId)) {
        $("#" + arrayId).addClass("present").removeClass("future past");

    } else if (parseInt(currentHour) > parseInt(arrayId)) {
        $("#" + arrayId).addClass("past").removeClass("present future");
    } else {
        $("#" + arrayId).addClass("future").removeClass("present past");
    }
}


var arrayOfTodosSubmittedByUser = []

// onclick event to save the todo input by the user 
$(".saveBtn").on("click", function (event) {

    // event.preventDefault();
    var idClass = $(this).attr("id") + ".todo-input";
    var userInput = $("#" + idClass).val();

    //console.log("userInput");
    console.log(userInput);

    arrayOfTodosSubmittedByUser.push(userInput)

    var myStuffInLocalStorage = JSON.stringify(arrayOfTodosSubmittedByUser);

    localStorage.setItem($(this).attr("id"), myStuffInLocalStorage)

    var currentMessage = localStorage.getItem($(this).attr("id"));


});