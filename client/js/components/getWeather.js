var x = document.querySelector("demo");
let div = document.querySelector(".data");

let latitude;
let longitude;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  const url = `/api/weather?longitude=${longitude}&latitude=${latitude}`;

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      temp = data.current.temp_c;
      checkWeth(temp);
      // Process the response data from the backend
      div.innerHTML = `
    <h2>${data.location.name}</h2>
    <img src="${data.current.condition.icon}">
    <p>${data.current.temp_c} Celcius</p>`;
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
    });
}

getLocation();

function checkWeth(temp) {
  if (temp < 15) {
    console.log("Winter");
  } else if (temp > 15 && temp < 25) {
    console.log("Moderate");
  } else if (temp > 25) {
    console.log("Summer");
  }
}
