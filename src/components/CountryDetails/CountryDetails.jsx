import CountrySpecs from "../CountrySpec/CountrySpec";

const CountryDetails = (props) => {
    // const {country, handleVisitedCountry} = props;
    return (
        <div>
            <h4>Country Detail</h4>
            <hr />
            {/* <CountrySpecs
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            ></CountrySpecs> */}
            <CountrySpecs {...props}></CountrySpecs>
        </div>
    );
};

export default CountryDetails;