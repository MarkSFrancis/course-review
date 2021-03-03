import { Center, Spinner } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { QueryFailedState, QueryState, QuerySuccessState } from "../../utils";
import { ErrorDisplay } from "../Alert";

export interface QueriesGuardProps<T extends Readonly<any[]>> {
  queries: QueryStateArray<T>;
  name?: string;
  children?:
    | ReactElement
    | null
    | ((...state: QuerySuccessStateArray<T>) => ReactElement | null);
}

type QueryStateArray<T> = { [K in keyof T]: QueryState<T[K]> };
type QuerySuccessStateArray<T> = { [K in keyof T]: QuerySuccessState<T[K]> };

export function QueriesGuard<T extends Readonly<any[]>>(
  props: QueriesGuardProps<T>
): ReactElement {
  if (props.queries.find((q) => q.state === "loading")) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  const errorQuery = props.queries.find(
    (q) => q.state === "error"
  ) as QueryFailedState<T>;
  if (errorQuery) {
    return (
      <Center>
        <ErrorDisplay
          description={props.name && `Error fetching ${props.name}`}
          err={errorQuery.error}
        />
      </Center>
    );
  }

  if (props.queries.find((q) => q.state === "notFound")) {
    return (
      <Center>
        <ErrorDisplay
          err={`The requested ${props.name ?? "resource"} was not found`}
        />
      </Center>
    );
  }

  if (props.queries.find((q) => q.state === "suspended")) {
    return <></>;
  }

  if (typeof props.children === "function") {
    return props.children(...(props.queries as QuerySuccessStateArray<T>));
  } else {
    return props.children;
  }
}
