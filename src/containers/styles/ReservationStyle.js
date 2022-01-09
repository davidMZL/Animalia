import styled from 'styled-components'

export const MainContainerReservation = styled.main`
    width: 100%;
    min-width: 320px;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
   
    @media(min-width: 768px) {
        flex-direction: row;
        margin: 0 auto;
    }
` 

export const PictureImage = styled.picture`
    width: 100%;
    min-width: 320px;
    margin: 0 0 6px;
    img {
        max-width: 80%;
        margin: 0 auto;
    }
`
