import styled from 'styled-components'
import { colors } from '../../../theme/foundations'

export const HeroWrapper = styled.main`
    width: 100%;
    min-width: 320px;
    height: auto;
    background-color: ${colors.color.whiteVet};
`

export const HeroContainer = styled.div`
    width: inherit;
    display: grid;
    grid-template: repeat(4, 325px) / minmax(320px, 1fr) ;
    max-width: 1820px;
    margin: 0 auto;
    @media(min-width: 768px) {
        grid-template: repeat(2, 305px) / repeat(4, 1fr) ;
    }
`

export const ChildHeroContainer = styled.div`

    &:nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        background-color: ${colors.color.darkVet};
        padding: 32px 30px 0 30px;
        position: relative;
        
        img { 
            position: absolute;
            max-width: 40%;
            height: auto;
            right: 20px;
            bottom: 0;
        }

        @media(min-width: 516px) {
            img { 
                max-width: 40%;
                height: auto;
                right: 110px;
            }
        }

        @media(min-width: 768px) {
            grid-column: 1 / span 2;
            grid-row: 1 / 3;
            img { 
                max-width: 42%;
                height: auto;
                right: 10px;
            }
        }

        @media(min-width: 996px) {
            img { 
                max-width: 56%;
                height: auto;
                right: 10px;
            }
        }

        @media(min-width: 1321px) {
            img { 
                max-width: 100%;
                height: auto;
                right: 30px;
            }
        }

        @media(min-width: 1400px) {
            padding: 32px 30px 0 60px;
        }
    }

    &:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        padding: 32px 30px 0 30px;
        background-color: ${colors.color.yellowVet};
        position: relative;

        img { 
            max-width: 60%;
            height: auto;
            position: absolute;
            bottom: 10px;
            align-self: flex-end;
        }

        @media(min-width: 516px) {
            img { 
                max-width: 80%;
                height: auto;
                align-self: center;
            }
        }
        
        @media(min-width: 768px) {
            grid-column: 3 / span 2;
            grid-row: 1 / 2;

            img { 
                max-width: 52%;
                height: auto;
                align-self: flex-end;
            }
        }

        @media(min-width: 1236px) {
            img { 
                max-width: 52%;
                height: auto;
                align-self: flex-end;
            }
        }

        @media(min-width: 1576px) {
            img { 
                margin-right: 130px;
            }
        }
    }

    &:nth-child(3) {
        background-color: #FDA76E;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        padding: 32px 30px 0 30px;
        position: relative;

        img { 
            max-width: 100%;
            height: auto;
            position: absolute;
            bottom: 10px;
            align-self: center;
        }

        @media(min-width: 768px) {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
            
            img { 
                max-width: 100%;
                height: auto;
            }
        }
    }

    &:nth-child(4) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        padding: 32px 30px 0 30px;
        position: relative;
        background: linear-gradient(128.99deg, #0A4455 0.79%, rgba(6, 59, 70, 0.88) 29.05%, rgba(7, 78, 93, 0.83) 51.27%, rgba(7, 78, 93, 0.68711) 64.05%, rgba(9, 92, 114, 0.6) 73.25%);

        img { 
            max-width: 85%;
            height: auto;
            position: absolute;
            bottom: 10px;
            align-self: center;
        }

        @media(min-width: 768px) {
            grid-column: 4 / 5;
            grid-row: 2 / 3;
            
            img { 
                max-width: 60%;
                height: auto;
            }
        }
        
    }
`


