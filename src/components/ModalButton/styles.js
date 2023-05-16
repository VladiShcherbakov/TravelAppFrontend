import styled from "styled-components";

const ButtonContainer = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 10px;
    gap: 10px;

    width: 215px;
    height: 40px;

    background: #FFFFFF;
    border-radius: 5px;

    box-sizing: border-box;
`;

const ButtonText = styled.p`
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    color: #000000;
`;

export { ButtonContainer, ButtonText, }