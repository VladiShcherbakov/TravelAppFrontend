import styled from "styled-components";

const ButtonContainer = styled.a`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    gap: 10px;

    width: fit-content;
    height: 27px;

    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 14px;

    p {
        font-family: var(--font);
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        display: flex;
        align-items: center;
        margin: 0;
    }
`;

export { ButtonContainer }