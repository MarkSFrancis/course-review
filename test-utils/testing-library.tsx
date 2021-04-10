import React from "react";
import {
  FakeFirebaseProvider,
  FakeFirebaseProviderProps,
} from "./FakeFirebaseProvider";
import { render as reactRender } from "@testing-library/react";

export * from "@testing-library/react";

export const render = (
  element: React.ReactNode,
  provider: FakeFirebaseProviderProps = { queryStates: [] }
) => {
  return reactRender(
    <FakeFirebaseProvider {...provider}>{element}</FakeFirebaseProvider>
  );
};
