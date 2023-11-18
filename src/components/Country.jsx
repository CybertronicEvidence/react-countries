import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Countries = ({ country }) => {
  const { name, flags, capital, population } = country;
  //   const languages = Object.values(country.languages).join(", ");

  return (
    <div className=" pb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
      <div className="country_flag">
        <img
          className="rounded-md shadow-md block "
          src={flags.png}
          alt={flags.alt}
        />
      </div>
      <h3 className="text-lg">{name.common.toUpperCase()}</h3>
      <h3>Capital: {capital}</h3>
      {/* <p>Languages: {languages}</p> */}
      <p>Population: {population}</p>
      <p>Currency: </p>
    </div>
  );
};

Countries.propTypes = {
  country: PropTypes.object.isRequired,
};

const Country = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://restcountries.com/v3.1/all";
        const response = await fetch(url);
        const countries = await response.json();
        const sortedCountries = countries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setData(sortedCountries);
        setFilteredData(sortedCountries);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredCountries = data.filter(
      (country) => country.name.common.toLowerCase().includes(query)
      // country.capital[0].toLowerCase().includes(query)
    );
    setFilteredData(filteredCountries);
  };

  return (
    <div className="App">
      <div className="bg-gray-100 mt-16 ml-56 mr-56 p-8">
        <h1 className="text-center font-bold text-7xl p-4 pb-6">
          World Countries Data
        </h1>
        <h1 className="text-center font-semibold text-2xl pb-4">
          Currently we have {filteredData.length} countries
        </h1>
      </div>
      <div className="flex justify-center p-12">
        <input
          type="text"
          placeholder="Search countries by name, city and languages"
          className="p-4 w-96 rounded-xl border-4 border-rose-500 ... outline-transparent"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="flex justify-center">
        <div className="countries-wrapper grid grid-cols-2 gap-20 font-semibold text-xs sm:text-base bg-gray-100 pl-36 pt-12">
          {filteredData.map((country) => (
            <Countries key={country.name.common} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;
