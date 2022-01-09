import styled, { css } from 'styled-components'
import { fonts, colors } from './foundations'
import arrow_down from '../assets/static/button/arrow_down.svg'
import { Link } from 'react-router-dom'

export const ExternalWrapper = styled.main`
    text-align: center;
    padding: 100px 0 0 0;

    @media(min-width: 768px) {
        padding: 140px 14% 0 14%;
    }

    @media(min-width:1200px) {
        padding: 140px auto 0 auto;
        width: 1200px;
    }
`

export const PrimaryTitle = styled.h1`
    font-family: ${fonts.primaryFont};
    font-style: normal;
    font-weight: ${props => props.weight || 700};
    font-size: 2.4rem;
    line-height: 2.6rem;
    margin: ${props => props.margin};
    color: ${colors.color.navyVet};
    cursor: default;

    ${props => props.dark && css`
        color: ${colors.color.darkVet};
    `}

    ${props => props.white && css`
        color: ${colors.color.whiteVet};
    `}


    @media(min-width: 768px) {
        font-size: 6.4rem;
        line-height: 8.9rem;
    }
`

export const SecondaryTitle = styled.h2`
    font-family: ${fonts.primaryFont};
    font-style: normal;
    font-size: 2.4rem;
    font-weight: ${props => props.weight || 600};
    line-height: 2.6rem;
    color: ${colors.color.navyVet};

    ${props => props.dark && css`
        color: ${colors.color.darkVet};
    `}

    ${props => props.white && css`
        color: ${colors.color.whiteVet};
    `}

    @media(min-width: 1286px){
        font-size: 3.6rem;
        line-height: 2.6rem;
    }
`

export const TextBody = styled.p`
    font-family: ${fonts.primaryFont};
    font-style: normal;
    font-size: 1.4rem;
    font-weight: ${props => props.weight || 400};
    line-height: 2.1rem;
    color: ${colors.color.navyVet};

    ${props => props.dark && css`
        color: ${colors.color.darkVet};
    `}

    ${props => props.white && css`
        color: ${colors.color.whiteVet};
    `}
    
    ${props => props.grayTransparent && css`
        color: ${colors.color.grayTransparent};
    `}

    @media(min-width: 1286px) {
        font-size: 1.8rem;
        line-height: 2.4rem;
    }
`

export const InputButtonMixin = css`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 190px;
    height: 45px;
    padding: 12px 15px;
    font-family: ${fonts.primaryFont};
    font-style: normal;
    font-weight: ${props => props.fontWeight || 400};
    font-size: 1.4rem;
    line-height: 2.1rem;
    background-color: ${colors.color.principalVet};
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;
    transition: 50ms ease-out;

    &:hover, 
    &:active {
        background-color: ${colors.color.inputHover};
    }  
    
    ${props => props.hover && css`
        background-color: rgba(233, 146, 64, 0.65);
        
        &:hover,
        &:active {
            background-color: ${colors.color.inputActive};
        }   
    `}

    ${props => props.active && css`
        background-color: ${colors.color.inputActive};
        
        &:hover,
        &:active {
            background-color: rgba(233, 146, 64, 0.65);
        }   
    `}

    ${props => props.green && css`
        background-color: ${colors.color.greenVet};
    `}

    span{
        &::before {
            content: '';
            vertical-align: middle;
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-left: 10px;
            background-image: url(${arrow_down});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

`

export const ButtonMixin = styled.button`
    ${InputButtonMixin};
`

export const inputMixin = css`
    width: 280px;
    height: 42px;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #000;
    border: 1px solid ${colors.color.darkVet};
    border-radius: 5px;
    outline: none;
    transition: 150ms ease-out border;

    &:hover,
    &:focus {
        background-color: #f0f0f0;
        border: 1px solid ${colors.color.principalVet};
    }

    &::placeholder {
        color: ${colors.color.darkVet}
    }

`

export const Form = styled.form`
    width: 100%;
    min-width: 320px;
    display: block;
    position: relative;

    ${props => props.center && css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `}

    ${props => props.top30 && css`
        margin-top: 30px; 
    `}

    label {
        margin-left: -220px;
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.6rem;
    }

`

export const Input = styled.input`
    cursor: pointer;
    padding: 12px 15px;
    ${inputMixin};

    ${props => props.bottom18 && css`
        margin: 0 0 18px 0;
    `}    

    ${props => props.bottom40 && css`
        margin-bottom: 40px;
    `} 

    ${props => props.tp9bt22 && css`
        margin: 9px 0 22px;
    `} 

    @media(min-width: 1024px) {
        font-size: 1em;
    }
`

export const InputSubmit = styled.input`
    ${InputButtonMixin};

    ${props => props.bottom20 && css`
        margin: 0 0 20px 0;
    `}
    
    ${props => props.bottom40 && css`
        margin: 0 0 40px 0;
    `}

    ${props => props.top30 && css`
        margin: 30px 0 0 0;
    `}

    ${props => props.top20btm40 && css`
        margin: 20px 0 40px 0;
    `}

    ${props =>
        props.disabled && css`
            background: ${colors.color.principalVet};
    `};
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${colors.color.navyVet};

    &:hover {
        text-decoration: underline;
    }

    ${props => props.orange && css`
        color: ${colors.color.principalVet};
    `}
`

export const Select = styled.select`
    width: 280px;
    height: 42px;
    font-family: ${fonts.primaryFont};
    font-weight: 300;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #000;
    border: 1px solid ${colors.color.darkVet};
    border-radius: 5px;
    outline: none;
    transition: 150ms ease-out border;
    padding: 8px 12px;

    &:hover,
    &:focus {
        background-color: #f0f0f0;
        border: 1px solid ${colors.color.principalVet};
    }

    &::placeholder {
        color: ${colors.color.darkVet}
    }

    ${props => props.bottom18 && css`
        margin: 0 0 18px 0;
    `}    

    ${props => props.bottom40 && css`
        margin-bottom: 40px;
    `} 

    ${props => props.tp9bt22 && css`
        margin: 9px 0 22px;
    `} 

    @media(min-width: 1024px) {
        font-size: 1em;
    }
`