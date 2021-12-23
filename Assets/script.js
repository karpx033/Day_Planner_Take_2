// var timeblocks = $(".container" );
// var timetable =document.createElement("UL");
// var tablerow =document.createElement("LI");
// var hours = "";
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
console.log(Number(parseInt(moment().startOf('day').fromNow())));
// function colorcoder() {
//     var currenthour =
// }