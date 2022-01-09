import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import Categories from '../components/CardContent/Categories'
import Carousel from '../components/CardContent/Carousel'
import Card from '../components/Card/Card'
import { colors } from '../theme/foundations'

const Home = ({newProducts, popularProducts, myList, numberCart}) => {
    console.log(myList)
    console.log(numberCart)
    return (
        <>
            {/* <Header/> */}
            <Hero/>
            <Info 
                text1="ENVIOS GRATIS" 
                text2="GARANTIA ASEGURADA" 
                text3="SOPORTE 24/7"
            />    
            <Categories colorBackground={colors.color.backCards} title="Nuevos Productos">
                <Carousel>
                {
                    newProducts.map(product => <Card key={product.id} {...product} myList={myList}/>)
                }
                </Carousel>
            </Categories>
            <Categories title="Productos Populares">
                <Carousel>
                {
                    popularProducts.map(product => <Card key={product.id} {...product}/>)
                }
                </Carousel>
            </Categories>
            {/* <Footer/> */}
        </> 

     
    );
}
 
const mapStateToProps = state => {
    return {
        newProducts: state.newProducts,
        popularProducts: state.popularProducts,
        myList: state.myList,
        numberCart: state.numberCart
    }
}

export default connect(mapStateToProps, null)(Home)