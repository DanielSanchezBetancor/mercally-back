import { getMockClass } from "../../../mocks/mock-connection";
import { buildTestDBWithBaseTest } from "../../../utils";

describe("Base Query Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  })
  it("should delete by the structure given", async () => {
    // Given
    await buildTestDBWithBaseTest()
    const { MockClass } = getMockClass()
    // When
    await new MockClass().delete({ id: 1 });
    const newValue = await new MockClass().getAllByField("id", 1);
    // Then
    expect(newValue.length).toBe(0)
  })
  it("should throw if no id is provided", async () => {
    // Given
    const { MockClass } = getMockClass()
    const structure = {} as any;
    // When
    const actual = async () => new MockClass().delete(structure);
    // Then
    expect(actual).rejects.toThrow('Field id is required in base table')
  })
  it("should try to insert by the structure given", async () => {
    // Given
    const id = 999;
    const { MockClass } = getMockClass()
    const structure = { id };
    // When
    await new MockClass().insert(structure);
    const newValue = await new MockClass().getAllByField("id", id);
    // Then
    expect(newValue[0].id).toBe(id)
  })
  it("should throw if no id is provided", async () => {
    // Given
    const { MockClass } = getMockClass()
    const structure = {} as any;
    // When
    const actual = () => new MockClass().insert(structure);
    // Then
    expect(actual).rejects.toThrow('Field id is required in base table')
  })
})