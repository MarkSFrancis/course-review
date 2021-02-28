import { firestore } from "../../utils";

export enum ResourceType {
  Course = "Course",
  Blog = "Blog",
}

export interface Resource {
  url: string;
  title: string;
  description: string;
  resourceType: ResourceType;
  createdBy: {
    displayName?: string;
    email?: string;
    uid: string;
  };
  createdOn: firestore.Timestamp;
}
