import styled from 'styled-components'
import { colors} from '../../../theme/foundations'
import { Form } from '../../../theme/externalStyles'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    /* padding: 44px 99px; */
    
    @media(min-width: 1000px) {
        border-radius: 15px;
        border: 1px solid ${colors.color.darkVet};
        padding: 44px 66px;
    }

    @media(min-width: 1300px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /* gap: 0 80px; */
        gap: 30px 25px;
    }
` 

export const FormStyled = styled(Form)`
    margin: 40px 0;
    order: -1;
`