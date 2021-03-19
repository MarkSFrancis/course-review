import { AuditCreatedBy } from "./audit";
import { Node } from "slate";

export interface Review extends AuditCreatedBy {
  rating: number;
  details: Node[];
}
