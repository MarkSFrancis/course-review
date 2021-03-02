import { firebase } from "./firebase";
import "firebase/firestore";
import { isDevMode } from "../isDevMode";
import firebaseCore from "firebase/app";

const firestoreDb = firebase.firestore();
let initialised = false;

if (!initialised) {
  if (isDevMode()) {
    firestoreDb.useEmulator("localhost", 8080);
  }

  initialised = true;
}

export const db = firestoreDb;

export type WithId<T> = T & {
  id: string;
};

export const now = () => firebaseCore.firestore.Timestamp.now();

export namespace firestore {
  export type Timestamp = firebaseCore.firestore.Timestamp;
  export type CollectionRef<T> = firebaseCore.firestore.CollectionReference<T>;
  export type CollectionQuery<
    T = firebaseCore.firestore.DocumentData
  > = firebaseCore.firestore.Query<T>;
  export type DocRef<
    T = firebaseCore.firestore.DocumentData
  > = firebaseCore.firestore.DocumentReference<T>;
  export type SetOptions = firebaseCore.firestore.SetOptions;
  export type GetOptions = firebaseCore.firestore.GetOptions;
  export type DocSnapshot<
    T = firebaseCore.firestore.DocumentData
  > = firebaseCore.firestore.DocumentSnapshot<T>;
  export type DocsSnapshot<
    T = firebaseCore.firestore.DocumentData
  > = firebaseCore.firestore.QuerySnapshot<T>;
}
