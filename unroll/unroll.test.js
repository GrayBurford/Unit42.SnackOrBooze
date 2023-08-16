const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("works with 2x2 matrix", function () {
    expect(unroll([[4,5], [7,8]])).toEqual([4,5,8,7])
  })

  it("works with 3x3 matrix", function () {
    expect(unroll([[4,5,6], [7,8,9], [1,2,3]])).toEqual([4,5,6,9,3,2,1,7,8])
  })

  it("works with 4x4 matrix", function () {
    expect(unroll([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ])).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
  })

  it("works with strings", function () {
    expect(unroll([
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ])).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"])
  })

});
