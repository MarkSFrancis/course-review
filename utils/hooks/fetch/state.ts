export interface FetchFailedState<T> {
  state: "error";
  error: unknown;
  previousValue: T | undefined;
}

export interface FetchSuccessState<T> {
  state: "success";
  value: T;
}

export interface FetchLoadingState<T> {
  state: "loading";
  previousValue: T | undefined;
}

export interface FetchSuspendedState<T> {
  state: "suspended";
  previousValue: T | undefined;
}

export type FetchState<T> =
  | FetchSuccessState<T>
  | FetchLoadingState<T>
  | FetchFailedState<T>
  | FetchSuspendedState<T>;
