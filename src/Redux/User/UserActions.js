import { FETCH_USERS_FALIURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./UserTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FALIURE,
        payload: error
    }
}