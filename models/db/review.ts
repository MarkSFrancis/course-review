import { AuditCreatedBy } from './audit';

export interface Review extends AuditCreatedBy {
  rating: number;
  details: string;
}
