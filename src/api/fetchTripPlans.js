import apiInstance from "./apiInstance";

const tripURI = "/home";

const fetchTripPlans = async () => {
    const response = await apiInstance.get(tripURI);

    return response.data;
};

export default fetchTripPlans;