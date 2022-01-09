import React from 'react'
import { InfoWrapper, ItemInfo, InfoText } from './styles/InfoStyles'
import { colors } from '../../theme/foundations'

const Info = ({text1, text2, text3}) => {
    return ( 
        <InfoWrapper>
            <ItemInfo color={colors.color.passionVet}>
                <InfoText white>{text1}</InfoText>
            </ItemInfo>
            <ItemInfo color={colors.color.greenVet}>
                <InfoText white>{text2}</InfoText>
            </ItemInfo>
            <ItemInfo color={colors.color.principalVet}>
                <InfoText white>{text3}</InfoText>
            </ItemInfo>
        </InfoWrapper>
    );
}
 
export default Info;