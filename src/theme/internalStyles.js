import styled, { css } from 'styled-components'
import { ButtonMixin, PrimaryTitle, SecondaryTitle, TextBody } from './externalStyles'


export const ButtonStyled = styled(ButtonMixin)`

    ${props => props.bottom27 && css`
        margin: 0 0 27px 0;
    `}

    ${props => props.bottom30 && css`
        margin: 0 0 30px 0;
    `}

    ${props => props.bottom40 && css`
        margin: 0 0 40px 0;
    `}

    ${props => props.bottom20 && css`
        margin: 0 0 20px 0;
    `}
    

    @media(min-width: 768px) {
        ${props => props.bottom20 && css`
            margin: 0 0 32px 0;
        `}
    }

`

export const TitleStyled = styled(PrimaryTitle)`
    margin: 0 0 20px 0;

    ${props => props.bottom15 && css`
        margin: 0 0 15px 0;
    `}

    ${props => props.bottom27 && css`
        margin: 0 0 27px 0;
    `}

    @media(min-width: 768px) {
        ${props => props.bottom27 && css`
            margin: 0 0 32px 0;
        `}
    }
`

export const SubtitleStyled = styled(SecondaryTitle)`
    z-index: 10;

    ${props => props.line30&& css`
        line-height: 3rem;
    `}
    ${props => props.bottom10 && css`
        margin: 0 0 10px 0;
    `}

    ${props => props.bottom15 && css`
        margin: 0 0 15px 0;
    `}

    ${props => props.bottom27 && css`
        margin: 0 0 27px 0;
    `}

    ${props => props.bottom40 && css`
        margin: 0 0 40px 0;
    `}

    ${props => props.fontSize20 && css`
        font-size: 2rem;
    `}

    @media(min-width: 1509px) {
        ${props => props.line30&& css`
            line-height: 5rem;
        `}
    }

`

export const TextStyled = styled(TextBody)`
    z-index: 10;

    ${props => props.bottom30 && css`
        margin: 0 0 30px 0;
    `}

    ${props => props.paragraph && css`
        margin: 0 0 10px 0;
    `}
    
    ${props => props.bottom20 && css`
        margin: 0 0 20px 0;
    `}

    ${props => props.bottom && css`
        margin: 0 0 25px 0;
    `}

    ${props => props.width155 && css`
        width: 155px;
    `}

    ${props => props.fontSize7 && css`
        font-size: 1rem;
    `}

    ${props => props.underline && css`
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    `}

    @media(min-width: 768px) {
        ${props => props.width155 && css`
            width: 200px;
        `}
    }
`
    