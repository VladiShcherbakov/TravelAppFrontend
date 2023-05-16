import styled from "styled-components";

const HomeBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    height: 100vh;   
`;

const InnerBody = styled.div`
    height:100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items:center;
    overflow-y: scroll;

`;

const HomeFilter = styled.div`
    background-color: #E4E4E4;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    gap: 10px;

    width: 100%;
    height: fit-content;

    box-sizing: border-box;
`;

const FilterButton = styled.a`
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
`;

const CardList = styled.div`
    padding 20px 0;    

    display: flex;
    flex-direction: column;
    align-items:center;

    height: 100%;
    width: 100%;

    overflow-y: scroll;

    gap: 20px;
`;

export{
    HomeBody,
    HomeFilter,
    InnerBody,
    FilterButton,
    CardList
}