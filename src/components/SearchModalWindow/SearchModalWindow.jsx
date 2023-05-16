import { useState } from "react";
import { ButtonText, ButtonsContainer, InnerButtonsContainer, WindowContainer } from "./styles";
import fetchTripPlans from "../../api/fetchTripPlans";
import { useEffect } from "react";

const SearchModalWindow = ({ showModal, customOnClick }) => {
    const [trips, setTrips] = useState([]);

    const getTrips = async () => {
        setTrips(await fetchTripPlans())
    }

    useEffect(() => {
        getTrips();
    }, []);

    return (
        <WindowContainer showModal={showModal} onClick={customOnClick}>
            <ButtonsContainer onClick={(e) => e.stopPropagation()}>
                <p>Выберите план для добавления места</p>
                <InnerButtonsContainer>
                    {Object.keys(trips).map((key) => (
                        <ButtonText key={trips[key].id} href={`/info/${trips[key].id}/${showModal}`} >{trips[key].name}</ButtonText>
                    ))}
                </InnerButtonsContainer>
            </ButtonsContainer>
        </WindowContainer>
    );
}

export default SearchModalWindow;