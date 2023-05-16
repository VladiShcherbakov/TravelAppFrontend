import DayInfoComponent from "../DayInfoComponent";
import { IntermediateLine, WeekContainer, WeekTextBox } from "./styles";

const WeekInfoComponent = ({ weekInfo }) => {
    return (
    <WeekContainer>
        <WeekTextBox>
            {weekInfo.text}
        </WeekTextBox>
        <IntermediateLine />
        {
            weekInfo.map((element, index) => 
                index + 1 ? <>
                    <DayInfoComponent key={index + "dic" + weekInfo.text} dayInfo={element} />
                    <IntermediateLine key={index + "line" + weekInfo.text} />
                </> : <></>
            )
        }
    </WeekContainer>
    );
}

export default WeekInfoComponent;

/* 
<>
    <DayInfoComponent key={weekInfo[element].time} dayInfo={weekInfo[element]} />
    <IntermediateLine key={weekInfo[element].time + "line"} />
</> 
*/