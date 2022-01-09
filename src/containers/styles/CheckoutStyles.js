import styled from 'styled-components'

export const ContainerCheckout = styled.main`
    width: 100%;
    min-height: 320px;
    max-width: 1700px;

    @media(min-width: 768px) {
        display: flex;
        padding: 76px 45px 66px;
        align-items: flex-start;
    }
`
export const CheckoutTitle = styled.div`
    text-align: center;
    margin: 30px 0 15px;

    @media(min-width: 768px) {
        text-align: start;
        margin: 10px 0 0 105px;
    }
`