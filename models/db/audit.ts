import { firestore } from "../../utils";

export interface AuditUser {
  displayName?: string;
  email?: string;
  uid: string;
}

export interface AuditCreatedBy {
  createdBy: AuditUser;
  createdOn: firestore.Timestamp;
}
