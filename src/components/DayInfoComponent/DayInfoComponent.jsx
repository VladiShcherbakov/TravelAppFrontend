import { DayContainer, DayDate, DayTextBox } from "./styles";

const DayInfoComponent = ({ dayInfo }) => {
    return (
        <DayContainer>
        <DayDate>
            {dayInfo.day} {dayInfo.date}
        </DayDate>
        {dayInfo.map((value, index) => (
            index + 1 ?
            <DayTextBox key={index + "dtb"}>
                <p key={index + "p1"}>{value.time}</p>
                <p key={index + "p2"}>{value.title}</p>
            </DayTextBox> : <></>
        ))}
        </DayContainer>
    );
}

export default DayInfoComponent;

/* <DayContainer>
        <DayDate>
            {dayInfo.date}
        </DayDate>
        {Object.entries(dayInfo.info).map((entry) => (
            <DayTextBox key={entry[0]}>
                <p>{entry[1].time}</p>
                <p>{entry[1].activity}</p>
            </DayTextBox>
        ))}</DayContainer> */