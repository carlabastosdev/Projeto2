import styled from "styled-components";

const Container = styled.header`
    width: 100%;
    height: 80px;
    background-color: #673AB7;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;

    .menu-title {
        font-size: xx-large;
        margin-left: 10px;
    }

    .menu-navegacao {
        font-size: x-large;
    }

    .menu-link {
        text-decoration:none;
        margin-right: 10px;
        color: #D1C4E9;
    }
`;

export default Container;