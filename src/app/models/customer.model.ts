import { User } from "./user.model";

export interface Customer{
    customerId?:number;
    aadhaarNumber?:number;
    firstName?:string;
    middleName?:string;
    lastName?:string;
    gender?:string;
    email?:string;
    mobileNumber?:number;
    user?:User;
}
