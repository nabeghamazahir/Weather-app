var x = document.querySelector("demo");


let latitude;
let longitude;

let weather_type;

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
      renderClimateWidget(data)
      
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
    });
}


function renderClimateWidget(data){

  div.innerHTML = `
    <h2>${data.location.name}</h2>
    <img src="${data.current.condition.icon}">
    <p>${data.current.temp_c} Celcius</p>`;
}

function checkWeth(temp) {
  if (temp < 15) {
    weather_type = "winter";
  } else if (temp > 15 && temp < 25) {
    weather_type = "moderate";
  } else if (temp > 25) {
    weather_type = "summer";
  }

  init(weather_type)
}

