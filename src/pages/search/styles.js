import styled from "styled-components";

const SearchBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    height: 100vh;   
`;

const SearchHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    box-sizing: border-box;
    padding: 10px;

    background-color: var(--main-color-blue);
    
`;

const SearchInput = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    

    width: 340px;
    height: 43px;

    background: rgba(196, 196, 196, 0.37);
    border-radius: 23px;

    font-size: 20px;
    font-family: var(--font);
    padding 0 15px;
`;

const InnerBody = styled.div`
    overflow-y: auto;
    height: 100%;
    width: 100%;

    padding: 10px 20px;

    box-sizing: border-box;

    overflow-y: scroll;

    gap: 15px;
`;

const ModalWindow = styled.div``;

export{
    SearchBody,
    SearchHeader,
    SearchInput,
    InnerBody,
}