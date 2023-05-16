import { Navbar, Header, PlanningCard } from "../../components";
import { HomeBody, HomeFilter, InnerBody, FilterButton, CardList } from "./styles";
import { useEffect, useState } from 'react';
import fetchTripPlans from '../../api/fetchTripPlans';

const HomePage = () => {
    const [trips, setTrips] = useState([]);

    const test = () => {
        alert('In development');
    }

    const getTrips = async () => {
        setTrips(await fetchTripPlans())
    }

    useEffect(() => {
        getTrips();
    }, []);

    return(
        <HomeBody>
            <Header text="Ваши поездки" />
            <InnerBody>
                <HomeFilter>
                    <FilterButton onClick={test}>Текущие</FilterButton>
                    <FilterButton>В архиве</FilterButton>
                </HomeFilter>
                <CardList>
                        {Object.keys(trips).map((key) => (
                            <PlanningCard key={trips[key].name} tripData={trips[key]}/>
                        ))}
                </CardList>
            </InnerBody>
            <Navbar/>
        </HomeBody>
    );
}

export default HomePage;