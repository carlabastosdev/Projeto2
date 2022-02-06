import styled from "styled-components";

const Container = styled.div`
`;

export const Title = styled.span`
    font-size: 50px;
    color: #512da8;
`;

export const Image = styled.img`
    max-width: 1280;
    max-height: 720px;
    width: auto;
    height: auto;
`;

export const ImageCarrossel = styled.img`
    max-width: 400px;
    max-height: 300px;
    width: auto;
    height: auto;
    margin: 10px;
`;

export const Informations = styled.div`
    display: flex;
    justify-content: center;
`;

export const Description = styled.div`
    width: 90%;
    font-size: x-large;
    margin: 10px auto;
`;

export const RequisitosDoSistema = styled.div`
    display: flex;
    justify-content: center;
`;

export const Comentarios = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

export default Container;