import { Action } from "@ngrx/store";
import { UserAuth } from "../auth/user-auth.model";


export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export class LoginAction implements Action {
    readonly type = LOGIN;

    constructor(user: UserAuth) { }
}

export class LogoutAction implements Action {
    readonly type = LOGOUT;

    constructor(user: UserAuth) { }
}