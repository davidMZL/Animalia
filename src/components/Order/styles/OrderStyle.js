import styled from 'styled-components'

export const OrderContainer = styled.section`
    width: 100%;
    min-width: 320px;
    max-width: 462px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 20px 42px;
    margin: 0 auto;
    
    @media(min-width: 1000px) {
        border-radius: 15px;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
`

export const ItemOrderContainer = styled.div`
    width: 100%;
    min-width: 320px;
    max-height: 492px;
    overflow-y: scroll;
    display: flex;
    align-items: center;
    flex-direction: column;


    &::-webkit-scrollbar {
        width: 8px;
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #b3b3b3;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }

    &::-webkit-scrollbar-thumb:active {
        background-color: #999999;
    }

    &::-webkit-scrollbar-track {
        background: #e1e1e1;
        border-radius: 4px; 
    }

    &::-webkit-scrollbar-track:hover,
    &::-webkit-scrollbar-track:active {
        background: #d4d4d4;
    }
`

export const LineSeparator = styled.div`
    width: 280px;
    height: 1px;
    margin: 15px 0;
    background-color: rgba(171, 171, 171, 0.5);
`

export const CostsContainer = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`