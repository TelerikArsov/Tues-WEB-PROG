class CustomEventHandler {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event with optional options
  subscribe(eventName, callback, options = {}) {
    // options = { once: false, priority: 0 }
    // Craete an array for the event if it doesn't exist
    // Add the callback along with its options
    // Sort callbacks by priority
  }

  // Unsubscribe from an event
  unsubscribe(eventName, callback) {
    // If the event exists, loop through the callbacks and remove the callback
    // you can use an Array function
  }

  emit(eventName, data, context) {
    const results = [];
    // If the event exists, loop through the callbacks and call them
    // collect results from callbacks
    // If the callback is a once callback, unsubscribe it
    return results;
  }
}

module.exports.CustomEventHandler = CustomEventHandler;
