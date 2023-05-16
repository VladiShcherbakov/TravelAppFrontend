import styled from "styled-components";

const PlanningBody = styled.div`
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
`;

const Form = styled.form`
    height: 100%;
    width: 100%;

    overflow: hidden;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    padding-top: 25px;
`;

const FormInfo = styled.div`
    overflow: hidden;

    box-sizing: border-box;

    gap: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;    
`;

const FormPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    margin: 0 25px;
`;

const FormPartLabel = styled.label`
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;    
`;

const FormPartInputText = styled.input`
    border: none;
    border-bottom: 1px solid black;
    &:focus {
        outline: none;
    }
    width: 100%;
`;

const FormPartInputImage = styled.input``;

const FormPartInputSubmit = styled.input`
    height: 50px;
    font-family: var(--font);
    background-color: #ffffff;
    border: 2px solid var(--main-color-blue);
    border-radius: 9px 9px 0px 0px;
`;

export{
    PlanningBody,
    InnerBody,
    Form,
    FormPart,
    FormPartLabel,
    FormPartInputText,
    FormPartInputImage,
    FormPartInputSubmit,
    FormInfo,
}