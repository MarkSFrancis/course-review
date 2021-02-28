import { isDevMode } from "../isDevMode";
import { firebase } from "./firebase";
import firebaseCore from "firebase/app";
import "firebase/auth";

const firebaseAuthApp = firebase.auth();
if (isDevMode()) {
  firebaseAuthApp.useEmulator("http://localhost:9099");
}

export const auth = firebaseAuthApp;
export namespace firebaseAuth {
  export type User = firebaseCore.User;
}
