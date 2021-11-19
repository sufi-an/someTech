import { AdminRole } from "./admin-role";

export interface Admin {
    readOnly?: boolean,
    _id?:string,
    email?: string,
    username: string,
    password: string,
    name: string,
    phoneNo:string|AdminRole,
    profileImg?: string,
    role: string,
    hasAccess:boolean,
    createdAt?:Date,
    updatedAt?:Date,

}
