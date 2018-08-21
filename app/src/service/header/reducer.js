const reducer = (state = { cartOpen: false }, action) => {
  const { type, types, data } = action
  switch (type) {
    case types.sendEmailResponse:
      const { products, categories, productsInCart, priceRange } = data
      return { ...state, products, categories, productsInCart, priceRange }
    case types.phoneCallResponse:
      return {
        ...state,
        productsInCart: data.productsInCart,
        productAdded: data.productAdded,
        isSnackbarOpen: true
      }
    default:
      return state
  }
}

export default reducer
