import React from 'react'
import { ContainerCategories } from './styles/CategoriesStyles'
import { SubtitleStyled } from '../../theme/internalStyles'

const Categories = ({children, title, colorBackground}) => {
    return ( 
        <ContainerCategories colorBackground={colorBackground}>
            <SubtitleStyled>{title}</SubtitleStyled>
            {children}
        </ContainerCategories>
    );
}
 
export default Categories;