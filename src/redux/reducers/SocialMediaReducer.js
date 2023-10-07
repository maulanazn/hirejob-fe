import initialState from './../config/initialState';

export const SosmedCreateReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SOSMED_CREATE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'SOSMED_CREATE_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        case 'SOSMED_CREATE_FAILED':
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

export const SosmedUpdateReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SOSMED_UPDATE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'SOSMED_UPDATE_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        case 'SOSMED_UPDATE_FAILED':
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

export const SosmedDeleteReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SOSMED_DELETE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'SOSMED_DELETE_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        case 'SOSMED_DELETE_FAILED':
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