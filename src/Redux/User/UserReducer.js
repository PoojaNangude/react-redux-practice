import { FETCH_USERS_REQUEST, 
        FETCH_USERS_SUCCESS, 
        FETCH_USERS_FALIURE } 
        from './UserTypes';

const initialState = {
    loading : false,
    users : [],
    error : ''
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FALIURE:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

export default UserReducer;