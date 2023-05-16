import tripApiInstance from "./tripApiInstance";

const placesURI = "/places/radius";
const apiKey = process.env.REACT_APP_API_KEY;

const fetchPlacesRadius = async ({ latitude = 65, longitude = 65, query }) => {
    const params = {
        lon: longitude,
        lat: latitude,
        name: query,
        limit: 6,
        radius: 10000000,
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

export default fetchPlacesRadius;