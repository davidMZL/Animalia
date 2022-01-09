import styled from 'styled-components'

export const LoginContainer = styled.main`
    width: 100%;
    min-width: 320px;
    display: flex;
    height: 100vh; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 895px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const RightWallPaper = styled.aside`
    display: none;
    @media(min-width: 895px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        padding: 28px 67px;
        background-color: #373B3C;
        transition: 480ms background-color ease-in;
        /* filter: drop-shadow(-4px 0px 8px rgba(55, 59, 60, 0.39)); */
    }
`

export const PictureImage = styled.picture`
    max-width: 100%;
    height: auto;
`

