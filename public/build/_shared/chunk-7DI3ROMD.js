import {
  createHotContext
} from "/build/_shared/chunk-M6RKDC7E.js";

// app/utils/downloadFile.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/downloadFile.ts"
  );
  import.meta.hot.lastModified = "1706454925363.11";
}
var downloadFile = async (storageClient, filePath, fileNameWithExtension) => {
  const blob = await storageClient.from("assetnest").download(filePath);
  if (blob.data) {
    const url = window.URL.createObjectURL(blob.data);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileNameWithExtension;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export {
  downloadFile
};
//# sourceMappingURL=/build/_shared/chunk-7DI3ROMD.js.map
