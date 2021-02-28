import { isDevMode } from "../isDevMode";
import { firebase } from "./firebase";
import "firebase/auth";

const auth = firebase.auth();
if (isDevMode()) {
  auth.useEmulator("http://localhost:9099");
}

export const firebaseAuth = auth;
