import {
  QueryFailedState,
  QueryLoadingState,
  QueryNotFoundState,
  QueryState,
  QuerySuccessState,
} from "../../../utils";
import { queryStateAsSubject } from "./queryReducer";

describe("queryStateAsSubject", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should immediately emit an event with the initial value when first subscribed", () => {
    const state: QueryState<unknown> = { state: "loading" };
    const { subject } = queryStateAsSubject(state);

    const fn = jest.fn();
    subject.subscribe({ next: fn });

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(state);
  });

  it("should dispatch error events onto subscriptions and log to console", () => {
    const { subject, dispatch } = queryStateAsSubject({ state: "loading" });

    const fn = jest.fn();
    subject.subscribe({ next: fn });

    const consoleFn = jest.fn();
    jest.spyOn(console, "error").mockImplementation(consoleFn);

    const error = { errorType: "test error" };
    dispatch({ type: "error", payload: error });

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith<[QueryFailedState]>(2, {
      state: "error",
      error,
    });

    expect(consoleFn).toHaveBeenCalledTimes(1);
  });

  it("should dispatch success events onto subscriptions", () => {
    const { subject, dispatch } = queryStateAsSubject({ state: "loading" });

    const fn = jest.fn();
    subject.subscribe({ next: fn });

    const value = "val";
    dispatch({ type: "success", payload: value });

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith<[QuerySuccessState<typeof value>]>(2, {
      state: "success",
      value,
    });
  });

  it("should dispatch not found events onto subscriptions", () => {
    const { subject, dispatch } = queryStateAsSubject({ state: "loading" });

    const fn = jest.fn();
    subject.subscribe({ next: fn });

    dispatch({ type: "notFound", payload: undefined });

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith<[QueryNotFoundState]>(2, {
      state: "notFound",
    });
  });

  it("should dispatch loading events onto subscriptions", () => {
    const { subject, dispatch } = queryStateAsSubject({ state: "loading" });

    const fn = jest.fn();
    subject.subscribe({ next: fn });

    dispatch({ type: "loading", payload: undefined });

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith<[QueryLoadingState]>(2, {
      state: "loading",
    });
  });
});
