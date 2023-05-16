import apiInstance from "./apiInstance";

const tripURI = "/planning";

const postTripPlan = async (planModel) => {

    const options = {
        headers: { 'Content-Type': 'multipart/form-data' }
      };

    const response = await apiInstance.post(tripURI, planModel, options);

    console.log(response);
}

export default postTripPlan;