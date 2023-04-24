import { DID } from "./Did";
import { DIDDocument } from "./DidDocument";

export class DIDDocumentBuilder {
  private didDocument: DIDDocument;

  private constructor(did: DID) {
    this.didDocument = new DIDDocument(did);
  }

  public static createFromSubject(
    did: DID,
    controller?: DIDDocument
  ): DIDDocumentBuilder {
    const builder = new DIDDocumentBuilder(did);

    if (controller) {
      builder.didDocument.controllers = controller.controllers;
    }
    return builder;
  }

  public addContext(context: string): DIDDocumentBuilder {
    if(this.didDocument && this.didDocument.contexts == null) {
      this.didDocument.contexts = [];
    } 
    
    if (!this.didDocument.contexts.includes(context)) {
      this.didDocument.contexts.push(context);
    }
    return this;
  }


}
