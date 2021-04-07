export function getMode() {
  if (process.env.NODE_ENV === "production") {
    return "prod";
  } else if (process.env.JEST_WORKER_ID) {
    return "jest";
  } else if (process.env.NODE_ENV === "test") {
    return "test";
  } else if (process.env.NODE_ENV === "development") {
    return "dev";
  }
}
