import { ButtonContainer } from "./styles";

const WeekButtonComponent = ({ weekText, setWeek, weekKey, tripData }) => {
    const handleClick = () => {
        setWeek(tripData[weekKey])
    }

    return (
        <ButtonContainer onClick={handleClick}>
            <p>{weekText}</p>
        </ButtonContainer>
    )
}

export default WeekButtonComponent;