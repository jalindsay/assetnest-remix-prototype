import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";

// app/utils/getTimeSinceDateInFormattedString.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/getTimeSinceDateInFormattedString.ts"
  );
  import.meta.hot.lastModified = "1700413891167.2588";
}
var getTimeSinceDateInFormattedString = (date) => {
  const now = /* @__PURE__ */ new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / (1e3 * 60));
  const hours = Math.floor(diff / (1e3 * 60 * 60));
  const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
  if (minutes === 0) {
    return "Just Now";
  }
  if (minutes === 1) {
    return "1 minute ago";
  }
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  if (hours === 1) {
    return "1 hour ago";
  }
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  if (days === 1) {
    return "1 day ago";
  }
  return `${days} days ago`;
};

export {
  getTimeSinceDateInFormattedString
};
//# sourceMappingURL=/build/_shared/chunk-UADOJQYD.js.map
