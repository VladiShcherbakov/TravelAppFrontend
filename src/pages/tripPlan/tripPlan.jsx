/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { ButtonToAdd, InnerBody, PlanBody, PlanImage, SeparatingLine, WeeksContainer } from "./styles";
import { Navbar, Header, WeekButtonComponent, WeekInfoComponent, ModalWindow } from "../../components";
import addIcon from "../../icons/add_button_blue.png";
import fetchTripInfo from "../../api/fetchTripInfo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import reduceTripInfos from "../../functions/reduceTripInfos";

const TripPlan = () => {
    const [week, setWeek] = useState();
    const [showModal, setShowModal] = useState(false);
    const [url, setUrl] = useState();

    const params = useParams();
    const [tripData, setTripData] = useState({});

    const getTripInfo = async () => {
        const trip = await fetchTripInfo(params.tripId);
        setUrl(`https://localhost:7212${trip.imagePath.replaceAll("\\", "/")}`);
        const sortedTrip = reduceTripInfos(trip.travelInfos);
        sortedTrip.name = trip.name;
        sortedTrip.description = trip.description;
        setTripData(sortedTrip);
        console.log(sortedTrip);
        setWeek(sortedTrip["week1"]);
    };

    useEffect(() => {
        getTripInfo();
    }, []);

    const customOnClick = () => {
        setShowModal(false);
    }
    
    const aOnClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    

    return (<PlanBody>
        <Header text="План поездки" />
        <InnerBody>
            <ModalWindow showModal={showModal} customOnClick={customOnClick} />

            <PlanImage url={url} >
                <p>{tripData.name}</p>
                <p>{tripData.description}</p>
            </PlanImage>
            <WeeksContainer>
                {Object.keys(tripData).map((key) => (
                    key === "name" || key === "description" ? <></> : <WeekButtonComponent key={key} weekText={tripData[key].text} setWeek={setWeek} weekKey={key} tripData={tripData} />
                ))}
            </WeeksContainer>
            <SeparatingLine />
            { week ? <WeekInfoComponent weekInfo = {week}/> : <></>}
            <ButtonToAdd onClick={aOnClick} showModal={showModal} >
                <img alt="add" src={addIcon} />
            </ButtonToAdd>
        </InnerBody>
        <Navbar />
    </PlanBody>);
};

export default TripPlan