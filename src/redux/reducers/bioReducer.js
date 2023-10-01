import initialState from './../config/initialState';

export const bioReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BIO_UPDATE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'BIO_UPDATE_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        case 'BIO_UPDATE_FAILED':
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export const getWorkData = (state = initialState, action) => {
    switch(action.type) {
        case 'WORKEXP_GET_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'WORKEXP_GET_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        case 'WORKEXP_GET_FAILED':
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export const getPortfolioData = (state = initialState, action) => {
    switch(action.type) {
        case 'PORTFOLIO_GET_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'PORTFOLIO_GET_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        case 'PORTFOLIO_GET_FAILED':
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state
    }
}