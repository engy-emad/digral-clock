// function displayTime() {
//     var dateTime = new Date();
//     var hrs = dataTime.getHours();
//     var min = dateTime.getMinutes();
//     var sec = dateTime.getSeconds();
//     var session = document.querySelector("session");

// if(hrs >=12){
//     session.innerHTML ="PM";

// }else{
//     session.innerHTML ="AM";
// }

// if(hrs>12){
//     hrs=hrs-12;
// }

//     document.getElementById("hours").innerHTML = hrs;

//     document.getElementById("minutes").innerHTML = min;
//     document.getElementById("seconds").innerHTML = sec;
// }

// setInterval(displayTime, 10);

function displayTime() {

    const current = new Date();

    const hours = document.getElementById("hours");
    hours.innerHTML = current.getHours() - 12;

    const minutes = document.getElementById("minutes");
    minutes.innerHTML = current.getMinutes();

    const sec = document.getElementById("seconds");
    sec.innerHTML = current.getSeconds();


    let session = document.getElementById("session");
    console.log(session)

    if (hours => 12) {
        session.innerHTML = ":PM";

    } else {
        session.innerHTML = ":AM";
    }


}
setInterval(displayTime, 10);


// var date = new Date();
// currentHours = date.getHours();
// currentHours = ("0" + currentHours).slice(-2);
// hours.innerHTML =currentHours;

// console.log(currentHours);