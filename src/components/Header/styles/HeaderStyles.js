import styled from 'styled-components'
import { colors, fonts } from '../../../theme/foundations'
import searchIcon from '../../../assets/static/header/search.svg'

export const WrapperMain = styled.header`
    width: 100%;
    min-width: 320px;
    height: 67px;
    background-color: ${colors.color.whiteVet};

    @media(min-width: 996px) {
        height: 139px;
    }
   
`

export const Navigation = styled.nav`
    height: inherit;
    
`

export const HeaderUl = styled.ul`
    width: inherit;
    width: 100%;
    height: inherit;
    min-width: inherit;
    display: inline-flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    
`

export const ItemHeader = styled.li`
    display: ${props => props.notMobile};
    &:nth-child(2) {
        img {
            width: 129px;
            height: auto;
        }
    }

    &.cart {
        display: flex;
        align-items: center;
        small {
            margin-left: 5px;
        }
    }

    @media(min-width: 996px) {
        display: inline-block;
        &:first-child {
            display: none;
        }

        &:nth-child(2) {
            img {
                width: 185px;
                height: 58px;
            }
        }

        &.profile {
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            position: relative;

            img {
                width: 30px;
                cursor: pointer;
            }

            ul {
                display: none;
                position: absolute;
                height: 40px;
                width: 100px;
                bottom: -40px;
                left: -8px;
                padding: 20px 2px 0;
                text-align: center;
                border-radius: 2px;
                z-index: 100;

                li {
                    font-size: 1rem;
                    cursor: pointer;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            &:hover {
                ul {
                    display: block;
                }
            }
        }
    }

    i {
        &::before{
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 17px;
            height: 16px;
            margin-right: 10px;
            background-image: url(${searchIcon});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
`

export const TextUserName = styled.small`
    font-weight: 400;
    max-width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 5px;
`

export const InputSearch = styled.input`
    width: 111px;
    height: 21px;
    font-family: ${fonts.primaryFont};
    font-style: normal;
    font-size: 0.9rem;
    line-height: 1.3rem;
    padding: 2px 12px;
    outline: none;
    color: ${colors.color.navyVet};
    border-radius: 12px;

    &:hover,
    &:focus {
        background-color: #f0f0f0;
    }

    &::placeholder {
        color: ${colors.color.navyVet}
    }
`