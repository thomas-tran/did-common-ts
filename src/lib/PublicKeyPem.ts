import { JSONObject } from './Json';
import { KeyFormat } from './KeyFormat';

export class PublicKeyPem extends KeyFormat {
  constructor(public readonly key: string) {
    if (!key) {
      throw new Error('key is required.');
    }
    super();
  }

  public toJson(): JSONObject {
    return {
      publicKeyPem: this.key,
    };
  }
}
