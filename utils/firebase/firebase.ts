import firebaseCore from 'firebase/app';
import { initFirebase } from './init';

initFirebase();
export const firebase = firebaseCore;
export type FirebaseError = { error: firebaseCore.FirebaseError };
