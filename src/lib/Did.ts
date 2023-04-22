import { checkNotNull, hashCode } from "./Utils";
import { IComparable } from "./interfaces/IComparable";

export class DID implements IComparable<DID> {
  private scheme = "did";

  constructor(
    public readonly method: string,
    public readonly methodSpecificId: string
  ) {}

  public toString(): string {
    return `${this.scheme}:${this.method}:${this.methodSpecificId}`;
  }

  public toJSON(): string {
    return this.toString();
  }

  public hashcode(): number {
    return hashCode(this.toString());
  }
  public equals(obj: unknown): boolean {
    if (obj === this) {
      return true;
    }

    if (obj instanceof DID) {
      const did = obj;
      return (
        this.method === did.method &&
        this.methodSpecificId === did.methodSpecificId
      );
    }

    if (typeof obj === "string") {
      return this.toString() === obj;
    }

    return false;
  }

  public compareTo(did: DID): number {
    checkNotNull(did, "did is null");
    const rc = this.method.localeCompare(did.method);
    return rc == 0
      ? this.methodSpecificId.localeCompare(did.methodSpecificId)
      : rc;
  }
}
