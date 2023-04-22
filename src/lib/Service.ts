import { JSONObject } from "./Json";

export class Service {
  constructor(
    public readonly id: string,
    public readonly type: string,
    public readonly serviceEndpoint: JSONObject
  ) {}

  public toJson(): JSONObject {
    return {
      id: this.id,
      type: this.type,
      serviceEndpoint: this.serviceEndpoint,
    };
  }
}
