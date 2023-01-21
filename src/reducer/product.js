const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALL_PRODUCTS':
      const featureProducts = action?.payload?.slice(0, 3)
      return {
        ...state,
        isLoading: false,
        products: action?.payload,
        featureProducts,
      }

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      }
    case 'API_ERROR':
      return { ...state, isLoading: false, isError: true }
    default:
      return state
  }
}

export default productReducer
