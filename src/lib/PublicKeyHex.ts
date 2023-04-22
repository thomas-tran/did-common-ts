import { JSONObject } from './Json';
import { KeyFormat } from './KeyFormat';

export class PublicKeyHex extends KeyFormat {
  constructor(public readonly key: string) {
    if (!key) {
      throw new Error('key is required.');
    }
    super();
  }

  public toJson(): JSONObject {
    return {
      publicKeyHex: this.key,
    };
  }
}
