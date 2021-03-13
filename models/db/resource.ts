import { AuditCreatedBy } from "./audit";

export enum ResourceType {
  Course = "Course",
  Blog = "Blog",
}

export interface Resource extends AuditCreatedBy {
  url: string;
  title: string;
  resourceType: ResourceType;
  topicIds?: Record<string, true>;
}
