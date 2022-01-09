import styled from 'styled-components'
import { colors } from '../../../theme/foundations'

export const ContainerCategories = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 1920px;
    text-align: center;
    background-color: ${props => props.colorBackground || colors.color.whiteVet};
    padding: 36px 0;
    
    @media(min-width: 1920px) {
        padding: 36px 0;
        margin: 0 auto; 
    }
`