import styled, { css } from 'styled-components'
import { colors } from '../../theme/foundations'

export const ProfileWrapper = styled.main`
    width: 100%;
    min-width: 320px;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    /* background: conic-gradient(from -39.91deg at 65.9% 36.36%, #FFFFFF -102.15deg, #FFFFFF 81.19deg, #FFFFFF 140.46deg, #FAFADD 171.14deg, #FBE8F1 182.64deg, #F2F9EC 193.12deg, #FFFFFF 257.85deg, #FFFFFF 441.19deg); */
`

export const ProfileInfoContent = styled.article`
    height: 150px;
    margin: 20px 0;
    /* text-align: center; */
`
export const ProfilePhoto = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: auto;
    /* background-color: ${colors.color.whiteVet}; */
    padding: 15px 0;
    border-radius: 5px;
    img {
        width: 100px;
    }
`

export const ReservationContent = styled.article`
    height: auto;
    width: 100%;
    min-width: 320px;
    margin: 30px 0;

`

export const OrdersContent = styled.article`
    width: 100%;
    height: auto;
    margin: 30px 0px;

`

export const ContainerTable = styled.article`
    width: 90%;
    background-color: ${colors.color.darkVet};
    /* border: 1px solid black; */
    padding: 30px 15px;
    margin: 10px auto;
    border-radius: 10px;

`

export const RowsTable = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

     ${props => props.row1 && css`
        font-weight: 700;
    `}
`

export const ItemOrder = styled.li`
    color: ${colors.color.whiteVet};
    font-size: 1rem;   

    @media(min-width: 425px) {
        font-size: 1.3rem;
    }

    @media(min-width: 425px) {
        font-size: 1.6rem;
    }
`

export const LineSeparatorTable = styled.div`
    width: 100%;
    height: 1px;
    margin: 15px 0;
    background-color: rgba(171, 171, 171, 0.5);
`