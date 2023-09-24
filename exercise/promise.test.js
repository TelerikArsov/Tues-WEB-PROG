const {
  PromiseImplementation,
} = require("../implementation/Promise");

describe("Custom Promise Implementation", () => {
  // Test cases for resolving promises
  test("Resolving a promise with a value", () => {
    new PromiseImplementation((resolve) => {
      resolve("Resolved value");
    }).then((result) => {
      expect(result).toBe("Resolved value");
    });
  });

  test("Resolving a promise with undefined", () => {
    new PromiseImplementation((resolve) => {
      resolve(undefined);
    }).then((result) => {
      expect(result).toBe(undefined);
    });
  });

  test("Calling then multiple times on a single promise", () => {
    const promise = new PromiseImplementation((resolve) => {
      setTimeout(() => {
        resolve("Async resolved");
      }, 100);
    });

    promise.then((result) => {
      expect(result).toBe("Async resolved");
    });

    promise.then((result) => {
      expect(result).toBe("Async resolved");
    });
  });

  // Test cases for rejecting promises
  test("Rejecting a promise with an error message", () => {
    new PromiseImplementation((resolve, reject) => {
      reject("Error message");
    }).catch((error) => {
      expect(error).toBe("Error message");
    });
  });

  // Test cases for chaining multiple then and catch calls
  test("Chaining multiple then calls", () => {
    new PromiseImplementation((resolve) => {
      resolve(1);
    })
      .then((result) => {
        expect(result).toBe(1);
        return result + 2;
      })
      .then((result) => {
        expect(result).toBe(3);
        return result * 2;
      })
      .then((result) => {
        expect(result).toBe(6);
      });
  });

  test("Chaining multiple catch calls", () => {
    new PromiseImplementation((resolve, reject) => {
      reject("Error");
    })
      .catch((error) => {
        expect(error).toBe("Error");
        return "Handled error";
      })
      .catch((error) => {
        expect(error).toBe("Handled error");
      });
  });

  test("Chaining then and catch calls on rejected promise", () => {
    const errHandler = jest.fn();

    PromiseImplementation.reject("Error")
      .then((result) => {
        expect(result).toBeUndefined();
      })
      .catch(errHandler);
    expect(errHandler).toHaveBeenCalledWith("Error");
  });

  // Test cases for asynchronous behavior
  test("Resolving asynchronously", () => {
    new PromiseImplementation((resolve) => {
      setTimeout(() => {
        resolve("Async resolved");
      }, 100);
    }).then((result) => {
      expect(result).toBe("Async resolved");
    });
  });

  test("Rejecting asynchronously", () => {
    new PromiseImplementation((resolve, reject) => {
      setTimeout(() => {
        reject("Async error");
      }, 100);
    }).catch((error) => {
      expect(error).toBe("Async error");
    });
  });

  // Testing then and catch with asynchronous behavior
  test("Chaining then and catch with asynchronous behavior", (done) => {
    const errHandler = jest.fn();
    new PromiseImplementation((resolve, reject) => {
      setTimeout(() => {
        resolve("Async resolved");
      }, 100);
    })
      .then((result) => {
        expect(result).toBe("Async resolved");
        return "Next async";
      })
      .catch(errHandler)
      .then((result) => {
        expect(result).toBe("Next async");
        done();
      });
    expect(errHandler).not.toHaveBeenCalled();
  });
});

describe("Advanced tests", () => {
  // Test cases for Promise.all
  test("Promise.all with an array of resolved promises", () => {
    const promises = [
      PromiseImplementation.resolve(1),
      PromiseImplementation.resolve(2),
      PromiseImplementation.resolve(3),
    ];

    PromiseImplementation.all(promises).then((result) => {
      expect(result).toEqual([1, 2, 3]);
    });
  });

  test("Promise.all with an array of mixed promises", () => {
    const promises = [
      PromiseImplementation.resolve(1),
      PromiseImplementation.reject("Error"),
      PromiseImplementation.resolve(3),
    ];

    PromiseImplementation.all(promises).catch((error) => {
      expect(error).toBe("Error");
    });
  });

  // Test cases for Promise.race
  test("Promise.race with resolved values", () => {
    const promises = [
      PromiseImplementation.resolve(1).then(() =>
        PromiseImplementation.resolve("fast")
      ),
      PromiseImplementation.resolve(2).then(() =>
        PromiseImplementation.resolve("winner")
      ),
    ];

    PromiseImplementation.race(promises).then((result) => {
      expect(result).toBe("fast");
    });
  });

  test("Promise.race with a rejected promise", () => {
    const promises = [
      PromiseImplementation.resolve(1).then(() =>
        PromiseImplementation.reject("Error")
      ),
      PromiseImplementation.resolve(2).then(() =>
        PromiseImplementation.resolve("winner")
      ),
    ];

    PromiseImplementation.race(promises).catch((error) => {
      expect(error).toBe("Error");
    });
  });
});
