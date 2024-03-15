import { Address } from "./address.model";
import { Customer } from "./customer.model";

 
 export enum ConnectionType {
    NON_INDUSTRIAL, 
    INDUSTRIAL, 
    AGRICULTURAL
  }
  
  export enum PhaseType {
    SINGLE_PHASE,
    THREE_PHASE
  }


export interface Connection{
    consumerNumber?:number;
    applicationDate?:Date;
    connectionDate?:Date;
    connectionStatus?: boolean;
    connectionType?: ConnectionType;
    phaseType?: PhaseType;
    customer?:Customer;
    address?:Address;

}