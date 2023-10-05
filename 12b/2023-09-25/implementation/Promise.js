class PromiseImplementation {
  constructor(executor) {
    this.state = "pending"; // "pending", "resolved", "rejected"
    this.value = undefined;
    this.error = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      // Your code here
    };

    const reject = (error) => {
      // Your code here
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onResolved, onRejected = (value) => value) {
    return new PromiseImplementation((resolve, reject) => {
      // Your code here
    });
  }

  catch(onRejected) {
    return this.then((value) => value, onRejected);
  }

  static resolve(value) {
    return new PromiseImplementation((resolve) => {
      resolve(value);
    });
  }

  static reject(error) {
    return new PromiseImplementation((resolve, reject) => {
      reject(error);
    });
  }

  static all(promises) {
    return new PromiseImplementation((resolve, reject) => {
      // Your code here
    });
  }

  static race(promises) {
    return new PromiseImplementation((resolve, reject) => {
      // Your code here
    });
  }
}

module.exports.PromiseImplementation = PromiseImplementation;
