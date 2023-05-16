import tripApiInstance from "./tripApiInstance";

const placesURI = "/places/bbox";
const apiKey = process.env.REACT_APP_API_KEY;

const fetchPlaces = async ({ latitude, longitude, query }) => {
    const params = {
        lon_min: longitude,
        lat_min: latitude,
        name: query,
        limit: 20,
        lon_max: longitude + 2,
        lat_max: latitude + 2,
        apikey: apiKey,
    };

    const config = {
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        },
    };

    const response = await tripApiInstance.get(placesURI, { params }, config);

    return response?.data?.features;
}

export default fetchPlaces;