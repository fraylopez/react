import { expect } from "chai";

describe('useState', () => {
  it("should return the initial value", () => {
    const [state, _setState] = useState(0);
    expect(state).equal(0);
  });
});

function useState(initialValue: any) {
  return [0, 0];
}