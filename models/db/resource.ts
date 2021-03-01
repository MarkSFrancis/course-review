import { AuditCreatedBy } from './audit';

export enum ResourceType {
  Course = "Course",
  Blog = "Blog",
}

interface ResourceBase extends AuditCreatedBy {
  url: string;
  title: string;
  description: string;
  resourceType: ResourceType;
}

export interface Course extends ResourceBase {
  resourceType: ResourceType.Course;
}

export interface Blog extends ResourceBase {
  resourceType: ResourceType.Blog;
}

export type Resource = Course | Blog;
