import styled from 'styled-components'
import { colors} from '../../../theme/foundations'

export const CardContainer = styled.div`
    width: 260px;
    height: 390px;
    background-color: ${colors.color.whiteVet};
    border: 1px solid rgba(0, 0, 0, 0.45);
    margin: 20px 12px;
`

export const TopCard = styled.div`
    position: relative;
    height: 241px;
    display: flex;
    justify-content: center;
`

export const BottomCard = styled.div`
    height: 149px;
    padding: 22px 20px;
    background-color: #F3F3F3;
    border: 1px solid #C1C1C1;
    border-radius: 0;
`

export const BottomCardContent = styled.div`
    display: flex;
    justify-content: space-between;
    
    img {
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }

        &:active {
            transform: scale(1.3);
        }
    }
`