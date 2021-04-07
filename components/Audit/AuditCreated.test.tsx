import { AuditCreatedBy } from "../../models";
import { RelativeTime, RelativeTimeProps } from "../Units";
import { firestore } from "../../utils";
import { render, screen } from "@testing-library/react";
import MockDate from "mockdate";
import { mocked } from "ts-jest/utils";
import React from "react";
import { AuditCreated, AuditCreatedProps } from "./AuditCreated";

jest.mock("../Units");

// Mocked so that these tests don't have to account for relative time's internals
mocked(
  (RelativeTime as any).render
).mockImplementation((props: RelativeTimeProps) => <span {...props}></span>);

const createdOn = "2000-01-01";
const audit: AuditCreatedBy = {
  createdBy: {
    uid: "testuser",
    displayName: "John Smith",
    email: "john@smith.com",
  },
  createdOn: (createdOn as unknown) as firestore.Timestamp, // As RelativeTime is mocked, we don't really need to use a timestamp
};

const renderAudit = (props: Omit<AuditCreatedProps, "children">) => {
  const displayNameTestId = "display-name";
  const relativeTimeTestId = "relative-time";

  render(
    <AuditCreated {...props}>
      {(displayName, relativeTime) => (
        <>
          <div data-testid={displayNameTestId}>{displayName}</div>
          <div data-testid={relativeTimeTestId}>{relativeTime}</div>
        </>
      )}
    </AuditCreated>
  );

  const displayName = screen.queryByTestId(displayNameTestId);
  const relativeTime = screen.queryByTestId(relativeTimeTestId);

  return { displayName, relativeTime };
};

describe("AuditCreated", () => {
  beforeEach(() => {
    MockDate.set("2000-01-01");
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("should pass display name and time to children", () => {
    const { displayName, relativeTime } = renderAudit({ value: audit });

    expect(displayName).toHaveTextContent(audit.createdBy.displayName);
    expect(relativeTime).toHaveTextContent(createdOn);
  });

  it("should use displayName and not email if displayName is set", () => {
    const { displayName } = renderAudit({ value: audit });

    expect(displayName).toHaveTextContent(audit.createdBy.displayName);
    expect(displayName).not.toHaveTextContent(audit.createdBy.email);
  });

  it("should use email if displayName is not set", () => {
    const { displayName } = renderAudit({
      value: {
        ...audit,
        createdBy: { ...audit.createdBy, displayName: undefined },
      },
    });

    expect(displayName).toHaveTextContent(audit.createdBy.email);
  });
});
