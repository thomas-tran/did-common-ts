import { JSONObject } from './Json';
import { KeyFormat } from './KeyFormat';
import { PublicKeyBase58 } from './PublicKeyBase58';
import { PublicKeyHex } from './PublicKeyHex';
import { PublicKeyJwk } from './PublicKeyJwk';
import { PublicKeyPem } from './PublicKeyPem';

export class VerificationMethod {
  constructor(
    public readonly id: string,
    public readonly type: string,
    public readonly controller: string,
    public readonly keyFormat?: KeyFormat
  ) {}

  public toJson(): JSONObject{
    const json: JSONObject = {
      id: this.id,
      controller: this.controller,
      type: this.type,
    };

    const keyFormat = this.keyFormat;
    if (keyFormat instanceof PublicKeyHex) {
      json.publicKeyHex = keyFormat.toJson();
    } else if (keyFormat instanceof PublicKeyBase58) {
      json.publicKeyBase58 = keyFormat.toJson();
    } else if (keyFormat instanceof PublicKeyPem) {
      json.publicKeyPem = keyFormat.toJson();
    } else if (keyFormat instanceof PublicKeyJwk) {
      json.publicKeyJwk = keyFormat.toJson();
    }

    return json;
  }
}
