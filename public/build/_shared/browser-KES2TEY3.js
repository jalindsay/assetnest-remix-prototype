import "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@supabase/node-fetch/browser.js
var getGlobal = function() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  throw new Error("unable to locate global object");
};
var globalObject = getGlobal();
var fetch = globalObject.fetch;
var browser_default = globalObject.fetch.bind(globalObject);
var Headers = globalObject.Headers;
var Request = globalObject.Request;
var Response = globalObject.Response;
export {
  Headers,
  Request,
  Response,
  browser_default as default,
  fetch
};
//# sourceMappingURL=/build/_shared/browser-KES2TEY3.js.map
