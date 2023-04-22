import { JSONObject } from "./Json";

export abstract class KeyFormat {
  abstract toJson(): JSONObject;
}
