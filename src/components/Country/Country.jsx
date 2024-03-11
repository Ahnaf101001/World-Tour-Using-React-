import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country);
    const {name, flags, capital, population, area, cca3} = country;
    const [ visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>{visited? "Visited" : "Not Visited"}</button>
            {visited ? "I have visited the country" : "I want to vivsit"}
        </div>
    );
};

export default Country;