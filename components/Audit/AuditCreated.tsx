import { FC, ReactElement, ReactNode } from "react";
import { AuditCreatedBy } from "../../models";
import { RelativeTime } from "../Units";

export interface AuditCreatedProps {
  value: AuditCreatedBy;
  children: (name: string, time: ReactNode) => ReactElement | null;
}

export const AuditCreated: FC<AuditCreatedProps> = (props) => {
  const displayName =
    props.value.createdBy?.displayName ??
    props.value.createdBy?.email ??
    "Unknown";

  return props.children(
    displayName,
    <RelativeTime>{props.value.createdOn}</RelativeTime>
  );
};
