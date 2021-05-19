import { UserAuth } from "../auth/user-auth.model";

export interface State {
    user: UserAuth
}

const initialState = {
    user: null
}

export function authReducer(state = initialState, action) {
    return state;
}