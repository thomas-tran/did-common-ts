import { JSONObject } from './Json';
import { KeyFormat } from './KeyFormat';

export class PublicKeyBase58 extends KeyFormat {
  constructor(public readonly key: string) {
    if (!key) {
      throw new Error('key is required.');
    }
    super();
  }

  public toJson(): JSONObject {
    return {
      publicKeyBase58: this.key,
    };
  }
}
