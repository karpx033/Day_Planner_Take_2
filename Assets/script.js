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

