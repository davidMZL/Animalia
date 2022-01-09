// import { combineReducers } from 'redux'
import { actions } from '../actions/index'

const reducer = (state, action) => {
    switch(action.type){
        case actions.getNumberCart:
            return{
                ...state
            }
        case actions.addTotalPrice:
            return {
                ...state,
                totalPrice: action.payload.totalPrice
            }
        case actions.addCart:
            if(state.numberCart == 0) {
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    description:action.payload.description,
                    image:action.payload.image,
                    price:action.payload.price
                } 
                state.myList.push(cart)

            } else {
                let check = false;
                state.myList.map((item, key) => {
                    if(item.id == action.payload.id) {
                        state.myList[key].quantity++
                        check = true
                    }
                })
                if(!check) {
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        description:action.payload.description,
                        image:action.payload.image,
                        price:action.payload.price
                    }
                    state.myList.push(_cart)
                }
            }

            return{
                ...state,
                numberCart: state.numberCart+1
            }

        case actions.increaseQuantity:
            state.numberCart++
            state.myList[action.payload].quantity++

            return {
                ...state
            }

        case actions.decreaseQuantity:
            let quantity = state.myList[action.payload].quantity
            if(quantity > 1) {
                state.numberCart--
                state.myList[action.payload].quantity--
            }

            return {
                ...state
            }

        case actions.deleteCart:
            let quantity_ = state.myList[action.payload].quantity
            return {
                ...state,
                number: state.numberCart - quantity_,
                myList: state.myList.filter(item => {
                    return item.id != state.myList[action.payload].id
                })
            }

        default:
            return state
    }
}

// const ShopApp = combineReducers({
//     _todoProduct: reducer
// })

export default reducer