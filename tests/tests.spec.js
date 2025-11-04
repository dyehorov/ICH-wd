// TDD
// Test Driven Development

function computeSmth() {
  return 1;
}

describe("computeSmth", () => {
  it("must not return undefined", () => {
    expect(computeSmth()).not.toBe(undefined);
  });
});

// red

// implement your function until it's green
