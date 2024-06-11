import { getMockClass } from "../../../mocks/mock-connection";

describe("Base Query Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  })
  it("should try to delete by the structure given", async () => {
    // Given
    const { MockClass, querySpy } = getMockClass(true)
    const structure = { id: 1 };
    // When
    await new MockClass().delete(structure);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith("DELETE FROM base WHERE id = 1");
  })
  it("should throw if no id is provided", async () => {
    // Given
    const { MockClass } = getMockClass(true)
    const structure = {} as any;
    // When
    const actual = async () => new MockClass().delete(structure);
    // Then
    expect(actual).rejects.toThrow('Field id is required in base table')
  })
  it("should try to insert by the structure given", async () => {
    // Given
    const { MockClass, querySpy } = getMockClass(true)
    const structure = { id: 1 };
    // When
    await new MockClass().insert(structure);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith("INSERT INTO base (id) VALUES (1)");
  })
  it("should throw if no id is provided", async () => {
    // Given
    const { MockClass } = getMockClass(true)
    const structure = {} as any;
    // When
    const actual = () => new MockClass().insert(structure);
    // Then
    expect(actual).rejects.toThrow('Field id is required in base table')
  })
})