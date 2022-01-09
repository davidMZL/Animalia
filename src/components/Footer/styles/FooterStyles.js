import styled, { css } from 'styled-components'
import { colors } from '../../../theme/foundations'
import { TextStyled, SubtitleStyled } from '../../../theme/internalStyles'

export const WrapperFooter = styled.footer`
    width: 100%;
    min-width: 320px;
    height: 548px;
`
export const TopFooter = styled.section`
    width: inherit;
    min-width: inherit;
    height: 419px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${colors.color.darkVet};
    padding: 38px;
`

export const ContainerInfo = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media(min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

export const ContactInfo = styled.div`
    /* order: 0; */
`

export const SubtitleFooterStyled = styled(SubtitleStyled)`
    @media(min-width: 768px) {
        font-size: 6.4rem;
        font-weight: 700;
        line-height: 9.6rem;
    }
`

export const TextFooterStyled = styled(TextStyled)`
    i {
        display: inline-block;
        content: '';
        vertical-align: middle;
        margin-right: 18px;
        width: 20px;
        height: 20px;
        background-image: url(${props => props.image});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
`

export const NavLinks = styled.ul`

    ${props => props.bot30top && css`
        margin: 30px 0;
    `}

    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: space-around;
        ${props => props.orderLast && css`
            order: 1;
        `}
    }

`

export const ItemLink = styled.li`
    display: inline-block;
    margin-right: 20px;
    
    @media(min-width: 768px) {
        margin: 0 0 20px 0;
    }
`

export const BottomFooter = styled.section`
    width: inherit;
    min-width: inherit;
    height: 128px;
    background-color: #5A6264;
    display: flex;
    justify-content: center;
    align-items: center;
` 