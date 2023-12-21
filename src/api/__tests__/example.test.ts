import { testFn } from "../example";
import setupTests from "@/utils/test";

describe("test", () => {
  const context = setupTests();

  test("test", () => {
    expect(testFn()).toBe(true);
  });
});
