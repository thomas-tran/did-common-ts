import { DIDController } from "../lib/DidController";

describe("test did controller", () => {
  it("should convert the controller to JSONObject", () => {
    const expectedJson = {
      controller: "did:method1:idstring",
    };

    const controller = new DIDController(expectedJson.controller);

    const testJson = controller.toJSON();

    console.log(testJson);
    expect(testJson).toEqual(expectedJson);
  });
});
