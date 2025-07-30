import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

/* const Weather = (props) => {
  return (
    <div className="weather">
      {console.log({props})}
      <h2>{props.day}</h2>
      <img src={props.img} alt={props.imgAlt} />
      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </div>
  );
}; */

const Weather = (props) => {
  return (
    <div className="weather">
      <WeatherIcon img={props.img} alt={props.imgAlt} />
      <WeatherData
        day={props.day}
        conditions={props.conditions}
        time={props.time}
      />
    </div>
  );
};

export default Weather;
