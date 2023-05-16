import { ButtonClose, ButtonContainer, TripsContainer } from "./styles";

const ButtonAddItemToTrip = ({ tripList }) => {
    return (
        <ButtonContainer>
            <p>Выберите поездку для добавления места</p>
            <TripsContainer>
                {Object.keys(tripList).map((key) => (
                    <p key={tripList[key].id}>{tripList[key].name}</p>
                ))}
            </TripsContainer>
            <ButtonClose>

            </ButtonClose>
        </ButtonContainer>
    )
}

export default ButtonAddItemToTrip;