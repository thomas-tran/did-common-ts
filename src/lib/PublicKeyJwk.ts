import { KeyFormat } from "./KeyFormat";
import { JSONObject } from "./Json";

export class PublicKeyJwk extends KeyFormat {
    constructor(public readonly crv: string,
        public readonly kty: string,
        public readonly x: string,
        public readonly kid?: string,
        public readonly y?: string,
        public readonly e?: string, //for RSA keys
        public readonly n?: string, //for RSA keys
        ) {
        if(!crv) {
            throw new Error('crv is required.');
        }
        if(!kty) {
            throw new Error('kty is required.');
        }
        if(!x) {
            throw new Error('x is required.');
        }
        super();
    }

    public toJson(): JSONObject {
        const json: JSONObject = {
            kty: this.kty,
            crv: this.crv,
            x: this.x,
        }

        if(this.kid) {
            json.kid = this.kid
        }

        if(this.y) {
            json.y = this.y
        }

        if(this.e) {
            json.e = this.e
        }

        if (this.n) {
            json.n = this.n
        }

        return {
            publicKeyJwk: json
        }
    }
}