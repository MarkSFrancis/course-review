import { getMode } from "./mode";

const env = process.env.NODE_ENV;
const jestWorkerId = process.env.JEST_WORKER_ID;

function setEnv(
  nodeEnv: typeof process["env"]["NODE_ENV"],
  jestWorkerId: string
) {
  (process.env.NODE_ENV as string) = nodeEnv;
  process.env.JEST_WORKER_ID = jestWorkerId;
}

describe("getMode", () => {
  afterEach(() => {
    setEnv(env, jestWorkerId);
  });

  it("returns prod when NODE_ENV is production and worker is not set", () => {
    setEnv("production", "");

    const mode = getMode();

    expect(mode).toBe("prod");
  });

  it("returns prod when NODE_ENV is production and worker is set", () => {
    setEnv("production", "test_worker");

    const mode = getMode();

    expect(mode).toBe("prod");
  });

  it("returns jest when worker is set and node_env is not production", () => {
    setEnv("development", "test_worker");

    const mode = getMode();

    expect(mode).toBe("jest");
  });

  it("returns test when NODE_ENV is test and worker is not set", () => {
    setEnv("test", "");

    const mode = getMode();

    expect(mode).toEqual("test");
  });

  it("returns dev when NODE_ENV is dev and worker is not set", () => {
    setEnv("development", "");

    const mode = getMode();

    expect(mode).toBe("dev");
  });
});
