function clock() {
    let today = new Date();
    document.getElementById("clock").innerHTML = today;
}
setInterval(clock, 1000);