import { AuditCreatedBy } from './audit';

export interface Topic extends AuditCreatedBy {
  name: string;
  color: string;
}
