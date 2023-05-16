import styled from "styled-components";

const DayTextBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 0px;
    gap: 10px;

    p {
        font-family: var(--font);
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        display: flex;
        align-items: center;

        margin: 0;
    }
`;

const DayDate = styled.div`
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
`;

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;

    box-sizing: border-box;
    
`;

export { DayTextBox, DayDate, DayContainer } 