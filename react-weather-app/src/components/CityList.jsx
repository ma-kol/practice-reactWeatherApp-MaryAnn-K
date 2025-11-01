/*

CityList.jsx: Component to list cities and handle user selection.

*/

const CityList = ({ citySelect }) => {

    const cities = ["New York", "London", "Tokyo"];

    return (
        <div className="city-container">
            {cities.map(city => {
                return <button key={city} onClick={() => { citySelect(city) }}>{city}</button>
            })}
        </div>
    );
}

export default CityList;