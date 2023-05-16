import styled from "styled-components";

const WeekContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    gap: 10px;

    width: 100%;

    box-sizing: border-box;
`;

const WeekTextBox = styled.p`
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;

    margin: 0;
`;
const IntermediateLine = styled.div`
    width: 263px;
    height: 0px;

    border: 1px solid #000000;
`;

export { WeekContainer, WeekTextBox, IntermediateLine }