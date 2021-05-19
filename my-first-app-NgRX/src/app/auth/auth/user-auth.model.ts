export class UserAuth {
    constructor(
        public mail:string,
        public userId:string,
        public token:string,
        public expirationDate: number){}
}