import { Card, Info, Text } from "./styles";
import { Link } from 'react-router-dom';

const PlanningCard = ({ tripData }) => {

    
    const url = `https://localhost:7212${tripData.imagePath.replaceAll("\\", "/")}`;
    const time = tripData.tripStart.split('T')[0].split('-');

    const link = `/trip/${tripData.id}`;
    return(
        <Link to={link} style={{textDecoration: 'none'}}>
            <Card url={url}>
                <Info>
                    <Text>{tripData.name}</Text>
                    <Text>{time[2]}-{time[1]}-{time[0]}</Text>
                    <Text>{tripData.description}</Text>
                </Info>
            </Card>
        </Link>
    );
}

export default PlanningCard;