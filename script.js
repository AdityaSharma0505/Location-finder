const showLoc = document.getElementById("show-location");
const getLoc = document.querySelector(".btn");
const info = document.querySelector(".info");

getLoc.addEventListener("click", locationHandler);

function locationHandler() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        const timestamp = position.timestamp;
        console.log(latitude, longitude);
        console.log(`Latitude : ${latitude}`);
        console.log(`Longitude : ${longitude}`);
        console.log(`Accuracy : ${accuracy}`);
        console.log(`Timestamp : ${timestamp}`);
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        let locationLink = `https://www.google.com/maps/@${latitude},${longitude}`;
        showLoc.innerHTML += `<br>Latitude: ${latitude}<br>Longitude: ${longitude}<br>Accuracy: ${accuracy}<br>Timestamp: ${timestamp} <br> <a class = "btn btn-warning" style = "width: 200px;" href = "${locationLink}" target = "_blank">View on Map</a>`;
        showLoc.style.display = "block";
        info.style.display = "none";
      },
      function (error) {
        console.log(error);
        info.removeChild(info.firstChild);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            info.innerHTML = "<h3>You denied the request for Geolocation.</h3>";
            break;
          case error.POSITION_UNAVAILABLE:
            info.innerHTML = "<h3>Location information is unavailable.</h3>";
            break;
          case error.TIMEOUT:
            info.innerHTML = "<h3>The request to get location timed out.</h3>";
            break;
          case error.UNKNOWN_ERROR:
            info.innerHTML = "<h3>An unknown error occurred.</h3>";
            break;
        }
      }
    );
  }
}
