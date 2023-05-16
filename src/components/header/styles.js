import styled from "styled-components";

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    box-sizing: border-box;

    @media (max-width: 400px) {
        width: 100%;
    }
    height: 95px;
    background-color: var(--main-color-blue);
    padding: 0 13px;
`;

const HeaderText = styled.p`
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 40px;
    display: flex;
    align-items: center;
`;

export{
    HeaderDiv,
    HeaderText,
}