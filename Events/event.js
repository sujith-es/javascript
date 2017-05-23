document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById('myHeading').style.color ='red';
    document.getElementById("demo").innerHTML = Date();
}