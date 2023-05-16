import apiInstance from "./apiInstance";



const fetchTripInfo = async (tripCardId) => {
    const tripURI = `/info/${tripCardId}`;
    
    const response = await apiInstance.get(tripURI);

    console.log(response);

    return response.data;
};

export default fetchTripInfo;