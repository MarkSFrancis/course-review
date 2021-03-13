import { db as fireDb } from "../../../../firebase/firestore";
import { Query } from './queryTypeHelpers';

export type FirebaseQueryBuilder<TQuery extends Query> = (
  db: typeof fireDb
) => TQuery;

export interface QueryFailedState<T> {
  state: "error";
  error: unknown;
  previousValue: T | null | undefined;
}

export interface QuerySuccessState<T> {
  state: "success";
  value: T;
}

export interface QueryNotFoundState<T> {
  state: "notFound";
  previousValue: T | null | undefined;
}

export interface QueryLoadingState<T> {
  state: "loading";
  previousValue: T | null | undefined;
}

export interface QuerySuspendedState<T> {
  state: "suspended";
  previousValue: T | null | undefined;
}

export type QueryState<T> =
  | QuerySuccessState<T>
  | QueryLoadingState<T>
  | QueryFailedState<T>
  | QueryNotFoundState<T>
  | QuerySuspendedState<T>;
