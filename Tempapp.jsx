import React, { useEffect, useState } from "react";
import "../styles.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=07571f360800d33b8d0aaa949859f861`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <h2 className="heading">Weather Report App</h2>
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No data found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view" />
                {search}
              </h2>
              <h1 className="temp">{city.temp} °C</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min} °C | Max : {city.temp_max} °C <br />
                Atm pressure : {city.pressure} hPa <br />
                Humidity : {city.humidity} %
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Tempapp;
