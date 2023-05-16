/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container, Info, Text } from "./styles";
import img from "../../icons/add_button.svg";
import fetchPlaceImage from "../../api/fetchPlaceImage";
import { useEffect, useState } from "react";

const SearchResult = ({ name, category, location, xid, setShowModal }) => {
    const [image, setImage] = useState("");
    const categories = category.split(',');

    const getImage = async (xid) => {
        setImage(await fetchPlaceImage({ xid }));

        console.log(image);
    };

    useEffect(() => {getImage(xid);}, [xid]); 

    const aOnClick = (event) => {
        event.preventDefault();
        setShowModal(xid);
    }

    return (
    <Container url={image}>
        <Button onClick={aOnClick}>
            <img src={img} alt="add" />
        </Button>
        <Info>
            <Text>{name}</Text>
            <Text>Теги: {categories[0]}, {categories[1]}, {categories[2]}</Text>
            <Text>{location[0]}, {location[1]}</Text>
        </Info>
    </Container>);
}

export default SearchResult;