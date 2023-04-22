import { VerificationMethod } from "./VerificationMethod";
import { JSONObject } from "./Json";

export abstract class VerificationRelationship {
  public verificationReferenceId?: string;
  public embeddedVerification?: VerificationMethod;

  protected constructor(params: Partial<VerificationRelationship>) {
    Object.assign(this, params);
  }

  public getId() {
    return !this.embeddedVerification
      ? this.verificationReferenceId
      : this.embeddedVerification;
  }

  public IsEmbeddedVerification(): boolean {
    return this.embeddedVerification !== null;
  }

  public toJson(): string | JSONObject {
    if (this.IsEmbeddedVerification() && this.embeddedVerification) {
      return this.embeddedVerification.toJson();
    } else if (this.verificationReferenceId) {
      return this.verificationReferenceId;
    } else {
      throw new Error("Invalid verification relationship value");
    }
  }
}
