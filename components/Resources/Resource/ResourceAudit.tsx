import React, { FC } from "react";
import { AuditCreated } from "../../Audit";
import { Text } from "design-system";
import { useResource } from "../ResourceContext";

export const ResourceAudit: FC = () => {
  const resource = useResource();

  return (
    <Text isTruncated>
      <AuditCreated value={resource}>
        {(addedBy, addedOn) => (
          <>
            Added by {addedBy}, {addedOn}
          </>
        )}
      </AuditCreated>
    </Text>
  );
};
