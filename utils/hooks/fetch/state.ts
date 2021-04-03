export interface FetchFailedState {
  state: "error";
  error: unknown;
}

export interface FetchSuccessState<T> {
  state: "success";
  value: T;
}

export interface FetchLoadingState {
  state: "loading";
}

export interface FetchSuspendedState {
  state: "suspended";
}

export type FetchState<T> =
  | FetchSuccessState<T>
  | FetchLoadingState
  | FetchFailedState
  | FetchSuspendedState;
