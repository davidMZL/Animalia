import styled from 'styled-components'

export const ContainerCount = styled.div`
    width: 55px;
    height: 21px;
    background-color: #F8F8F8;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .minor {
        width: 10px;
        cursor: pointer;

        &:active {
            transform: scale(1.2);
        }
    }

    .plus {
        width: 10px;
        height: 10px;
        cursor: pointer;

        &:active {
            transform: scale(1.2);
        }
    }
`