import styled from "styled-components";

const Button = styled.a`
    all: unset;
    width: 90px;
    height: 60px;
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
`;

const Text = styled.p`
    font-family: var(--font);
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
`;

const Icon = styled.img`
    height: 40px;
    width: 40px;
`;

export {
    Button,
    Text,
    Icon,
}