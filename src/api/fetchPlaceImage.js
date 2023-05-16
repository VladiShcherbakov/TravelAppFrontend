import tripApiInstance from "./tripApiInstance";

const apiKey = process.env.REACT_APP_API_KEY;

const fetchPlaceImage = async ({ xid }) => {
    const params = {
        apikey: apiKey,
    };

    const placesURI = `/places/xid/${xid}`;

    const result = await tripApiInstance.get(placesURI, { params });

    return result?.data?.preview?.source;
}

export default fetchPlaceImage;