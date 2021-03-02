import { Center, Spinner } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { QueryState, QuerySuccessState } from "../../utils";
import { ErrorDisplay } from "../Alert";

export interface QueryGuardProps<T> {
  query: QueryState<T>;
  name?: string;
  children?:
    | ReactElement
    | null
    | ((state: QuerySuccessState<T>) => ReactElement | null);
}

export function QueryGuard<T>(props: QueryGuardProps<T>): ReactElement {
  switch (props.query.state) {
    case "loading":
      return (
        <Center>
          <Spinner />
        </Center>
      );
    case "error":
      return (
        <Center>
          <ErrorDisplay
            description={props.name && `Error fetching ${props.name}`}
            err={props.query.error}
          />
        </Center>
      );
    case "notFound":
      return (
        <Center>
          <ErrorDisplay
            err={`The requested ${props.name ?? "resource"} was not found`}
          />
        </Center>
      );
    case "suspended":
      return <></>;
    case "success":
      if (typeof props.children === "function") {
        return props.children(props.query);
      } else {
        return props.children;
      }
  }
}
