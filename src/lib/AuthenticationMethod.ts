import { VerificationRelationship } from "./VerificationRelationship";

export class AuthenticationMethod extends VerificationRelationship {
    constructor(params: Partial<AuthenticationMethod>){
        super(params);
    }
}