import { db as fireDb } from "../../../../firebase/firestore";
import { Query } from "./queryTypeHelpers";

export type FirebaseQueryBuilder<TQuery extends Query> = (
  db: typeof fireDb
) => TQuery;

export interface QueryFailedState {
  state: "error";
  error: unknown;
}

export interface QuerySuccessState<T> {
  state: "success";
  value: T;
}

export interface QueryNotFoundState {
  state: "notFound";
}

export interface QueryLoadingState {
  state: "loading";
}

export type QueryState<T> =
  | QuerySuccessState<T>
  | QueryLoadingState
  | QueryFailedState
  | QueryNotFoundState;
