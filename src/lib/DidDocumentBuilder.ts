import { DID } from "./Did";
import { DIDDocument } from "./DidDocument";

export class DIDDocumentBuilder {
  private didDocument: DIDDocument | undefined;

  public static createFromSubject(
    did: DID,
    controller?: DIDDocument
  ): DIDDocumentBuilder {
    const builder = new DIDDocumentBuilder();
    builder.didDocument = new DIDDocument(did);

    if (controller) {
      builder.didDocument.controllers = controller.controllers;
    }
    return builder;
  }
}
