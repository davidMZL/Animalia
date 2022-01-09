import styled from 'styled-components'
import { SubtitleStyled } from '../../../theme/internalStyles'

export const InfoWrapper = styled.section`
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    @media(min-width: 768px) {
        flex-direction: row;
    }
`

export const ItemInfo = styled.div`
    width: inherit;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px 25px;
    background-color: ${props => props.color};

`

export const InfoText = styled(SubtitleStyled)`
    @media(min-width: 1286px){
        font-size: 2.4rem;
        line-height: 2.6rem;
    }
`