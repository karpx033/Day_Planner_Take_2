// var timeblocks = $(".container" );
// var timetable =document.createElement("UL");
// var tablerow =document.createElement("LI");
// var hours = "";

let colors = ['nine', 'ten', 'eleven'];
for (const Number of colors){
    console.log(Number);
}
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function colorcoder() {
    var currenthour = Number(parseInt(moment().startOf('day').fromNow()));
    var timeEL = document.getElementsByClassName("timeCL");
    console.log(currenthour);
    for (var i=0; i<timeEL.length; i++){
        if (currenthour === Number([i])) {
         timeEL[i].classList.add("present");
        } else if (currenthour <Number([i])) {
            timeEL[i].classList.add("future"); 
        } else {
            timeEL[i].classList.add("past");
        }
    }
}
  
colorcoder();

// var todos = {}


// function toLS(){
//   var input = document.getElementById("textarea");
//   localStorage.setItem("description", (input.value)); 
  
// }




function saving(event) {
    console.log(event);
    var buttonEL = document.getElementsByTagName("button");
    let current = event.target.parentNode.parentNode;
    let prevSiblings = current.previousElementSibling;
    var thetarget = prevSiblings.children[0];
    console.log(thetarget);
    console.log(thetarget.value);
    var data =thetarget.value;
    console.log(data);
    console.log(buttonEL);
    console.log(event.target.parentNode);
    for (var i=0; i<buttonEL.length; i++){
        if (buttonEL[i] === event.target.parentNode) {
    localStorage.setItem("todo " +[i], JSON.stringify(data));
        } else return;
}}