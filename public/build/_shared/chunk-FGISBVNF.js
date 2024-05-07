import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";

// app/utils/emailValidator.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/emailValidator.ts"
  );
  import.meta.hot.lastModified = "1700413891167.125";
}
var emailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export {
  emailValid
};
//# sourceMappingURL=/build/_shared/chunk-FGISBVNF.js.map
