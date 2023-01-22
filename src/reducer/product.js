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

    case 'SET_LOADING_SINGLE_PRODUCT':
      return {
        ...state,
        isLoadingSingleProduct: false,
      }

    case 'SET_SINGLE_PRODUCT':
      return {
        ...state,
        singleProduct: action?.payload,
        isLoadingSingleProduct: false,
      }

    case 'API_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoadingSingleProduct: false,
      }
    default:
      return state
  }
}

export default productReducer
