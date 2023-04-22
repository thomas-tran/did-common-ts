/* eslint-disable @typescript-eslint/no-unused-vars */
import { JSONObject } from './Json';
import { checkArgument } from './Utils';

export abstract class DIDEntity<T> {
  public abstract toJSON(): JSONObject;
  protected abstract fromJSON(json: JSONObject): void;
  protected static deserialize<T extends DIDEntity<T>>(
    source: JSONObject | string,
    type: new () => T
  ): T {
    const condition = source !== '';
    checkArgument(condition, 'Invalid JSON content');

    let content: JSONObject;
    if (typeof source === 'string') {
      content = JSON.parse(source);
    } else {
      content = source;
    }

    const obj = new type();
    obj.fromJSON(content);

    return obj;
  }

  public toString(): string {
    return this.serialize();
  }

  public serialize(): string {
    try {
      return JSON.stringify(this.toJSON()).normalize('NFC');
    } catch (e) {
      throw new Error(`Internal error ${JSON.stringify(e)}`);
    }
  }

  public clone(): DIDEntity<T> {
    const clone = Object.assign({}, this);
    Object.setPrototypeOf(clone, Object.getPrototypeOf(this));
    return clone;
  }
}
