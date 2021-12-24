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
console.log(Number(parseInt(moment().startOf('day').fromNow())));
console.log(typeof Number(parseInt(moment().startOf('day').fromNow())));
var nine = ($("#9"))
nine.value= 18;

// i = 9

// document.getElementById([i]).classList.add("present")

function colorcoder() {
    var currenthour = Number(parseInt(moment().startOf('day').fromNow()));
    console.log(currenthour);
    console.log(typeof currenthour);
    console.log(nine.value);
    console.log(typeof nine.value);
   

    var timeEL = document.getElementsByClassName("timeCL");
    for (var i=0; i<timeEL.length; i++){
        if (currenthour === Number([i])) {
         timeEL[i].classList.add("present");
    //     } else if (currenthour <[i]) {
    //         document.getElementById((Number([i]))).classList.add("present"); 
    //     } else {
    //         document.getElementById((Number([i]))).classList.add("present");
    //     }
    // }
     
     
     
     
        // timeEL[i].style.display = "";
}}};    
//    for (let i = 0; i < 4; i++) {
//     console.log([i]);
//     console.log(Number([i]));
//     console.log(typeof (Number([i])));
//     console.log(document.getElementById(Number([i])));
//     document.getElementById(Number([i])).classList.add("present");
//     if (currenthour === Number([i])) {
        
//         document.getElementById((Number([i]))).classList.add("present");
//     } else if (currenthour <[i]) {
//         document.getElementById((Number([i]))).classList.add("present"); 
//     } else {
//         document.getElementById((Number([i]))).classList.add("present");
//     }
// }
// // }
//    }
// }

colorcoder();