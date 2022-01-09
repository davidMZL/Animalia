export const actions = {
    addCart: 'ADD_CARD',
    getNumberCart: 'GET_NUMBER_CART',
    increaseQuantity: 'INCREASE_QUANTITY',
    decreaseQuantity: 'DECREASE_QUANTITY',
    deleteCart: 'DELETE_CART',
    addTotalPrice: 'ADD_TOTAL_PRICE'
} 

export const addCart = payload => ({
    type: actions.addCart,
    payload
})

export const getNumberCart = payload => ({
    type: actions.getNumberCart,
    payload
})

export const increaseQuantity = payload => ({
    type: actions.increaseQuantity,
    payload
})

export const decreaseQuantity = payload => ({
    type: actions.decreaseQuantity,
    payload
})

export const deleteCart = payload => ({
    type: actions.deleteCart,
    payload
})

export const addTotalPrice = payload => ({
    type: actions.addTotalPrice,
    payload
})