import { FirebaseError } from "../../../utils";
import { isFirebaseError, FirebaseErrorDisplay } from "./FirebaseErrorDisplay";
import { render, screen } from "@testing-library/react";

const testError: FirebaseError = {
  error: {
    code: "Test code",
    message: "Test message",
    name: "Test name",
  },
};

describe("isFirebaseError", () => {
  it("should return true when the error has a code, name, and message", () => {
    const err = testError;

    expect(isFirebaseError(err)).toEqual(true);
  });

  it("should return false when the error has a code, but not a name or message", () => {
    const err = {
      error: {
        code: "Test code",
      },
    };

    expect(isFirebaseError(err)).toEqual(false);
  });

  it("should return false when the error is not an object", () => {
    const err = true;

    expect(isFirebaseError(err)).toEqual(false);
  });
});

describe("FirebaseErrorDisplay", () => {
  it("should display the code and message, but not the name", () => {
    render(<FirebaseErrorDisplay err={testError} />);

    expect(screen.queryByText(new RegExp(testError.error.code))).toBeInTheDocument();
    expect(screen.queryByText(new RegExp(testError.error.message))).toBeInTheDocument();
    expect(screen.queryByText(new RegExp(testError.error.name))).not.toBeInTheDocument();
  });
});
