const CountrySpecs = ({country, handleVisitedCountry}) => {
    return (
        <div>
            <p>
                <small>
                    Data: <br />
                    Name: {country.name.common}
                </small>
            </p>
        </div>
    );
};

export default CountrySpecs;