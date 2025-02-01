/*document.querySelector("button").addEventListener("click", () => {
  const place = document.getElementById("location").value;
  const prom = fetch(
    //Async task it takes time to execute
    `http://api.weatherapi.com/v1/current.json?key=3b6d23bb1cc040f7a09154546250201&q=${place}&aqi=yes`
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

document.querySelector("button").addEventListener("click", (event) => {
  const place = document.getElementById("location").value;
  function updatetemp(data) {
    const element = document.getElementById("weatherInfo");
    element.innerHTML = `Today's Temperature: ${data.current.temp_c} & wind direction is: ${data.current.wind_dir}`;
  }
  const weather = fetch(
    `http://api.weatherapi.com/v1/current.json?key=3b6d23bb1cc040f7a09154546250201&q=${place}&aqi=yes`
  )
    .then((data) => {
      return data.json();
    })
    .then((data2) => updatetemp(data2));
});
