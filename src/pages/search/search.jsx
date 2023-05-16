import { useContext } from "react";
import LocationContext from "../../context";
import { SearchBody, SearchHeader, SearchInput, InnerBody } from "./styles";
import { Navbar, SearchResult } from "../../components";
import { useState } from "react";
import fetchPlacesRadius from "../../api/fetchPlacesRadius";
import SearchModalWindow from "../../components/SearchModalWindow/SearchModalWindow";

const SearchPage = () => {
    const { latitude, longitude } = useContext(LocationContext);
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    let query = "";
    const location = `${latitude}, ${longitude}`;

    const handleRequest = async (latitude, longitude, query) => {
        if (latitude && longitude) {
            setData(await fetchPlacesRadius({ latitude, longitude, query }));

            console.log(data);
        }
    }

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            query = document.getElementById('search').value;
            await handleRequest(latitude, longitude, query);
        }
    }

    const customOnClickFalse = () => {
        setShowModal(false);
    }

    const customOnClickTrue = (xid) => {
        setShowModal(xid);
    }

    return(
        <SearchBody>
            <SearchModalWindow showModal={showModal} customOnClick={customOnClickFalse} />
            <SearchHeader>
                <SearchInput type="search" onKeyDown={handleKeyDown} id="search" />
            </SearchHeader>
            <InnerBody>
                {Object.keys(data).map((key) => (
                    <SearchResult 
                        key={key} 
                        name={data[key].properties.name} 
                        category={data[key].properties.kinds} 
                        xid={data[key].properties.xid} 
                        location={data[key].geometry.coordinates} 
                        setShowModal={customOnClickTrue}
                        showModal={showModal}/>
                ))}
            </InnerBody>
            <Navbar />
        </SearchBody>
    );
}

export default SearchPage;