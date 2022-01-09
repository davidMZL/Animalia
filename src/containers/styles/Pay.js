import styled from 'styled-components'

export const PayContainer = styled.main`
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh; 
    justify-content: center;

    /* @media(min-width: 895px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    } */
`
export const PictureImage = styled.picture`
    max-width: 60%;
    height: auto;
    /* .img {
        width: 50%;
        height: 120px;
    } */
`

