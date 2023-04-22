import { AssertionMethod } from "./AssertionMethod";
import { AuthenticationMethod } from "./AuthenticationMethod";
import { CapabilityDelegationMethod } from "./CapabilityDelegationMethod";
import { CapabilityInvocationMethod } from "./CapabilityInvocationMethod";
import { Contexts } from "./Contants";
import { Service } from "./Service";
import { VerificationMethod } from "./VerificationMethod";
import { JSONObject } from "./Json";
import { KeyAgreementMethod } from "./KeyAgreementMethod";
import { DIDEntity } from "./DidEntity";
import { DIDController } from "./DidController";
import { DID } from "./Did";

export class DIDDocument extends DIDEntity<DIDDocument> {
  public contexts: string[] = [Contexts.W3C_DID_CONTEXT];
  private subject: DID;
  public controllers?: DIDController;
  public alsoKnownAs?: string[];
  public services?: Service[];
  public assertionMethods?: AssertionMethod[];
  public verificationMethods?: VerificationMethod[];
  public authenticationMethods?: AuthenticationMethod[];
  public capabilityInvocationMethods?: CapabilityInvocationMethod[];
  public capabilityDelegationMethods?: CapabilityDelegationMethod[];
  public keyAgreementMethods?: KeyAgreementMethod[];

  constructor(subject: DID) {
    super();
    this.subject = subject;
  }

  public getSubject(): DID {
    return this.subject;
  }

  public toJSON(): JSONObject {
    const didDoc: JSONObject = {};

    if (this.contexts.length > 0) {
      didDoc["@context"] = Array.from(this.contexts);
    }

    didDoc.id = this.subject.toString();

    if (this.controllers) {
      didDoc.controller = this.controllers.toJSON();
    }

    if (this.alsoKnownAs && this.alsoKnownAs.length > 0) {
      didDoc.alsoKnownAs = Array.from(this.alsoKnownAs);
    }

    if (this.assertionMethods && this.assertionMethods.length > 0) {
      didDoc.assertionMethod = Array.from(this.assertionMethods, (m) =>
        m.toJson()
      );
    }

    if (this.authenticationMethods && this.authenticationMethods.length > 0) {
      didDoc.authentication = Array.from(this.authenticationMethods, (m) =>
        m.toJson()
      );
    }

    if (
      this.capabilityDelegationMethods &&
      this.capabilityDelegationMethods.length > 0
    ) {
      didDoc.capabilityDelegation = Array.from(
        this.capabilityDelegationMethods,
        (m) => m.toJson()
      );
    }

    if (
      this.capabilityInvocationMethods &&
      this.capabilityInvocationMethods.length > 0
    ) {
      didDoc.capabilityInvocation = Array.from(
        this.capabilityInvocationMethods,
        (m) => m.toJson()
      );
    }

    if (this.keyAgreementMethods && this.keyAgreementMethods.length > 0) {
      didDoc.keyAgreement = Array.from(this.keyAgreementMethods, (m) =>
        m.toJson()
      );
    }

    if (this.verificationMethods && this.verificationMethods.length > 0) {
      didDoc.verificationMethod = Array.from(this.verificationMethods, (m) =>
        m.toJson()
      );
    }

    if (this.services && this.services.length > 0) {
      didDoc.service = Array.from(this.services, (s) => s.toJson());
    }

    return didDoc;
  }

  protected fromJSON(json: JSONObject): void {
    throw new Error("Method not implemented." + json);
  }
}
