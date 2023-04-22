import { DIDEntity } from "./DidEntity";
import { JSONObject, JSONValue } from "./Json";

export class DIDController extends DIDEntity<DIDController>{
   
    private controller: string | string [];

    constructor(controller: string | string []) {
        super();
        this.controller = controller;
    }

    public toJSON(): JSONObject {
        const isArray = Array.isArray(this.controller);
        const json: JSONObject = {};
        if(isArray) {
            json.controller = this.controller;
        } else {
            json.controller = this.controller as string;
        }
        return json;
    }

    protected fromJSON(controller: JSONObject): void {
        if (Array.isArray(controller)) {
            this.controller = controller.map((item: JSONValue) => item as string);
        } else {
            this.controller = controller as unknown as string;
        }
    }
    
}