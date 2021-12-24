

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

function colorcoder() {
    var currenthour = Number(parseInt(moment().startOf('day').fromNow()));
    console.log(currenthour);
    console.log(moment().startOf('day').fromNow());
    var timeEL = document.getElementsByClassName("timeCL");
   
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



function saving(event) {
    // console.log(event);
    var buttonEL = document.getElementsByTagName("button");
    let current = event.target.parentNode.parentNode;
    let prevSiblings = current.previousElementSibling;
    var thetarget = prevSiblings.children[0];
    // console.log(thetarget);
    // console.log(thetarget.value);
    var data =thetarget.value;
    // console.log(data);
    // console.log(buttonEL);
    // console.log(event.target.parentNode);
    for (var i=0; i<buttonEL.length; i++){
        if (buttonEL[i].id === event.target.parentNode.id) {
    localStorage.setItem("todo " +[i], JSON.stringify(data));
        }    
}};

function pullsaved() {
    var textEL = document.getElementsByClassName("textarea");

    for (var i=0; i<textEL.length; i++){
        var saved = JSON.parse(localStorage.getItem("todo " +[i]));

        textEL[i].value=saved
    }
}

pullsaved();