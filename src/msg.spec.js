import { describe, expect, it } from 'vitest';
const msg = require('./msg');

describe("greet", () => {
  it("should return a greeting", () => {
    expect(msg.greet()).to.not.equal("Hello there.");
  });
});
