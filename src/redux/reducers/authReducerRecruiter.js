import initialState from './../config/initialState';

export const loginReducerRecruiter = (state = initialState, action) => {
    if (action.type === 'LOGIN_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'LOGIN_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            isError: false,
            errorMessage: ''
        }
    }

    if (action.type === 'LOGIN_FAILED') {
        return {
            ...state,
            data: null,
            isLoading: false,
            isError: true,
            errorMessage: action.payload
        }
    }

    return state;
}

export const registerReducerRecruiter = (state = initialState, action) => {
    if (action.type === 'REGISTER_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'REGISTER_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            isError: true,
            errorMessage: ''
        }
    }

    if (action.type === 'REGISTER_FAILED') {
        return {
            ...state,
            data: null,
            isLoading: false,
            isError: true,
            errorMessage: action.payload
        }
    }

    return state;
}