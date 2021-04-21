import React from "react";
import { render, screen } from "test-utils";
import { BlobsBackground } from ".";

describe("BlobsBackground", () => {
  it("should render children", () => {
    const testId = "child-id";

    render(
      <BlobsBackground
        blobColors={[
          "rgb(0, 0, 0)",
          "rgb(0, 0, 0)",
          "rgb(0, 0, 0)",
          "rgb(0, 0, 0)",
          "rgb(0, 0, 0)",
          "rgb(0, 0, 0)",
          "rgb(0, 0, 0)",
        ]}
      >
        <div data-testid={testId}>content</div>
      </BlobsBackground>
    );

    const child = screen.queryByTestId(testId);
    expect(child).toBeInTheDocument();
  });
});
