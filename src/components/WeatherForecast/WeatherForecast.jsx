import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

/* const Weather = (props) => {
  console.log(props) // make sure console.log() is outside of the return statement.
  return (
    <div className="weather">
      
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

const Weather = ({ img, imgAlt, day, conditions, time }) => {
  return (
    <div className="weather">
      <WeatherIcon img={img} alt={imgAlt} />
      <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  );
};

export default Weather;
