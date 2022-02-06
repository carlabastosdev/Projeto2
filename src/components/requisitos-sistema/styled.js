import styled from "styled-components";

const Container = styled.div`
    background-color: #f0ecf8;
    text-align: left;
    min-width: 600px;
    max-width: 800px;
    border: 1px solid;
    box-shadow: 0 0 7px #888888;
    border-radius: 7px;
    padding: 7px;
    text-align: center;
`;

export const Title = styled.div`
    font-weight: 700;
    color: #673AB7;
    margin: 3px 0px 10px 0px;
`;

export const Label = styled.span`
    font-weight: 700;
`;

export default Container;