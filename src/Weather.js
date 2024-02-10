import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>;

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = `72bb9dab46b9ec3d65f423c63f27a9b8`;
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(ApiUrl).then(handleResponse);
  return;
  <h2>Hello from weather</h2>;
}
