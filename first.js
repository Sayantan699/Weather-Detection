document.querySelector("button").addEventListener("click", () => {
  const place = document.getElementById("location").value;
  const prom = fetch(
    //Async task it takes time to execute
    `https://api.weatherapi.com/v1/current.json?key=3b6d23bb1cc040f7a09154546250201&q=${place}&aqi=yes`
  );
  function updatetemp(data) {
    const element = document.getElementById("weatherInfo");
    element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
  }
  prom
    .then((response) => {
      return response.json();
    })
    .then((data) => updatetemp(data));
});
*/
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  const place = document.getElementById("location").value;
  const weather = fetch(
    `http://api.weatherapi.com/v1/current.json?key=3b6d23bb1cc040f7a09154546250201&q=${place}&aqi=no`
  );
  const weatherinfo = document.getElementById("weatherInfo");
  const weatherinfo2 = document.getElementById("weatherInfo2");
  const weatherinfo3 = document.getElementById("weatherInfo3");
  weather
    .then((response) => response.json())
    .then((data) => {
      weatherinfo.innerHTML = `Today's Temperature: ${data.current.temp_c}°C`;
      weatherinfo2.innerHTML = `Wind Speed: ${data.current.wind_kph}`;
      weatherinfo3.innerHTML = `Wind Direction: ${data.current.wind_dir}`;
    });
});
