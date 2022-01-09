import styled from 'styled-components'

export const CarouselContainer = styled.section`
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px 0;
    /* background-color: red; */

    @media(min-width: 516px) {
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
`