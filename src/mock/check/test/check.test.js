const check = require("../check");

describe("check", () => {
  let onFail;
  let onSuccess;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccese when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    expect(onSuccess).toBeCalledTimes(1);
    expect(onSuccess).toBeCalledWith("yes");
    expect(onFail).toBeCalledTimes(0);
  });
});
