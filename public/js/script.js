var launchDate = new Date(2023, 9, 14)

var x = setInterval(() => {
    var now = new Date()
    
    var timeFrom =   launchDate.getTime() - now.getTime()
    var days = Math.floor(timeFrom / (1000 * 60 * 60 * 24))
    var hours = Math.floor(timeFrom % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    var minutes = Math.floor(timeFrom % (1000 * 60 * 60) / (1000 * 60))
    var seconds = Math.floor(timeFrom % (1000 * 60) / 1000)

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    if (timeFrom = 0) {
        clearInterval(x)
    }

}, 1000)
