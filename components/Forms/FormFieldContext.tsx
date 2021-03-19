import { createContext, useContext } from "react";
import { FormikFieldChildren } from "./types";

const formFieldContext = createContext<FormikFieldChildren>(undefined);

export const FieldProvider = formFieldContext.Provider;

export const useField = () => useContext(formFieldContext);
