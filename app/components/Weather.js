"use client";
import React, { useState } from "react";

const apiKey = "876d6473233cd5de68039d0a9c28d0a6";
const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&q=`;

const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = () => {
    fetch(`${url}${cityName}&units=metric`)
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((data) => setWeatherData(data));
  };

  return (
    <div className="mt-4 p-12 border-solid border-2 border-sky-600 rounded-xl">
      <h1 className="text-4xl text-sky-600 font-bold">
        Weer
        <span className="text-2xl font-normal"> via openweathermap API</span>
      </h1>
      <p className="mt-2">
        Vul hier een stad in en zie wat het weer op dit moment is.
      </p>
      <div className="mt-6 flex">
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter city"
          className="input input-bordered"
        />
        <button
          type="submit"
          onClick={getWeather}
          className="btn ml-4 text-sky-600"
        >
          Zie het weer
        </button>
      </div>
      {weatherData && weatherData.main && (
        <div className="flex gap-12 mt-4">
          <div className="">
            <div className="flex gap-6 mt-4">
              <h1 className="text-4xl font-bold text-sky-600">
                {weatherData.name}
              </h1>
              <h2 className="text-4xl font-semibold text-slate-600">
                {Math.floor(weatherData.main.temp)}ºC
              </h2>
            </div>
            <div>
              <h3 className="text-2xl">{weatherData.weather[0].description}</h3>
            </div>
          </div>
          <div className="mt-4 bg-sky-600 rounded-lg px-4 py-2 text-white text-2xl font-semibold flex flex-col gap-4 max-w-80">
            <h2 className="font-normal">
              Minimaal:{" "}
              <span className="font-semibold">
                {Math.floor(weatherData.main.temp_min)}ºC
              </span>
            </h2>
            <h2 className="font-normal">
              Maximaal:{" "}
              <span className="font-semibold">
                {Math.floor(weatherData.main.temp_max)}ºC
              </span>
            </h2>
          </div>
          <div className="text-2xl pt-4">
            <h2>
              Windsnelheid:{" "}
              <span className="text-2xl font-semibold">
                {weatherData.wind.speed}m/s
              </span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
