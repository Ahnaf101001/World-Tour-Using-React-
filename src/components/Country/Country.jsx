import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({country, handleVisitedCountry}) => {
    console.log(country);
    const {name, flags, capital, population, area, cca3} = country;
    const [ visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountry(country);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark as Visited</button><br /><br />
            <button onClick={handleVisited}>{visited? "Visited" : "Not Visited"}</button>
            {visited ? "I have visited the country" : "I want to vivsit"}
            <hr />
            <CountryDetails
                country={country}
                handleVisitedCountry={handleVisitedCountry}
            ></CountryDetails>
        </div>
    );
};

export default Country;