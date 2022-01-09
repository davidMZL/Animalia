import styled from 'styled-components'

export const ItemCardContainer = styled.div`
    width: 300px;
    height: 130px;
    background-color: #FDFDFD;
    display: flex;
    /* margin: 10px auto; */
    padding: 15px 10px 15px 11px;
`

export const LeftItemCard =styled.div`
    width: 98px;
    height: 100px;

    figure { 
        height: 100px;
        border-radius: 10px;
        background-color: #F8F8F8;
        
        img { 
            margin: 0 auto;
            max-width: 70%;
            height: 100%;
        }
    }
    
`

export const RightItemCard = styled.div`
    width: 181px;
    margin-left: 10px;
    
`

export const BottomItemCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`