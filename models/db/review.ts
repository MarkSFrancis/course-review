import { AuditCreatedBy } from "./audit";
import { RichInputElement } from 'design-system';

export interface Review extends AuditCreatedBy {
  rating: number;
  details: RichInputElement[];
}
