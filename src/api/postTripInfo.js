import apiInstance from "./apiInstance";

const tripURI = "/info";

const postTripInfo = async (infoModel) => {

    const options = {
        headers: { 'Content-Type': 'multipart/form-data' }
      };

    const response = await apiInstance.post(tripURI, infoModel, options);

    console.log(response);
}

export default postTripInfo;