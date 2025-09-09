import "@testing-library/jest-dom";
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import LoginTab from "../login";

describe("LoginTab UI component render check", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders login component", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });

  it("renders Sign in button", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(
      screen.getByRole("button", { name: /Sign in/i })
    ).toBeInTheDocument();
  });

  it("calls loginFunction when Sign in button is clicked", () => {
    const mockLogin = jest.fn();
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={mockLogin}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /Sign in/i }));
    expect(mockLogin).toHaveBeenCalledTimes(1);
  });

  it("renders Remember me checkbox", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByLabelText(/Remember me/i)).toBeInTheDocument();
  });

  it("renders Forgot your password link", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByText(/Forgot your password/i)).toBeInTheDocument();
  });

  it("renders email and password inputs with default values", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={"admin@savor.com"}
        password={"password"}
      />
    );
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue(
      "admin@savor.com"
    );
    expect(screen.getByPlaceholderText(/Password/i)).toHaveValue("password");
  });

  it("Sign in button is not disabled", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByRole("button", { name: /Sign in/i })).not.toBeDisabled();
  });

  it("Sign in button is disabled", () => {
    render(
      <LoginTab
        disableSignIn={true}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByRole("button", { name: /Sign in/i })).toBeDisabled();
  });

  // Additional tests

  it("toggles Remember me checkbox", () => {
    const setRememberMeEnabled = jest.fn();
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={setRememberMeEnabled}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    fireEvent.click(screen.getByLabelText(/Remember me/i));
    expect(setRememberMeEnabled).toHaveBeenCalledWith(true);
  });

  it("does not toggle Remember me checkbox when disabled", () => {
    const setRememberMeEnabled = jest.fn();
    render(
      <LoginTab
        disableSignIn={true}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setSignInDisable={jest.fn()}
        setRememberMeEnabled={setRememberMeEnabled}
        emailId={""}
        password={""}
      />
    );
    fireEvent.click(screen.getByLabelText(/Remember me/i));
    expect(setRememberMeEnabled).not.toHaveBeenCalled();
  });

  it("renders with empty email and password", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/Password/i)).toHaveValue("");
  });

  it("renders with custom props", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={true}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={"user@example.com"}
        password={"123456"}
      />
    );
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue(
      "user@example.com"
    );
    expect(screen.getByPlaceholderText(/Password/i)).toHaveValue("123456");
    expect(screen.getByLabelText(/Remember me/i)).toBeChecked();
  });

  it("calls loginFunction when Sign in button is clicked", () => {
    const mockLogin = jest.fn();
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={mockLogin}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /Sign in/i }));
    expect(mockLogin).toHaveBeenCalledTimes(1);
  });

  it("renders Remember me checkbox", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByLabelText(/Remember me/i)).toBeInTheDocument();
  });

  it("renders Forgot your password link", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByText(/Forgot your password/i)).toBeInTheDocument();
  });

  it("renders email and password inputs with default values", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={"admin@savor.com"}
        password={"password"}
      />
    );
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue(
      "admin@savor.com"
    );
    expect(screen.getByPlaceholderText(/Password/i)).toHaveValue("password");
  });
  it("Sign in button is not disabled", () => {
    render(
      <LoginTab
        disableSignIn={false}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByRole("button", { name: /Sign in/i })).not.toBeDisabled();
  });

  it("Sign in button is disabled", () => {
    render(
      <LoginTab
        disableSignIn={true}
        loginFunction={jest.fn()}
        rememberMeEnabled={false}
        setRememberMeEnabled={jest.fn()}
        setSignInDisable={jest.fn()}
        emailId={""}
        password={""}
      />
    );
    expect(screen.getByRole("button", { name: /Sign in/i })).toBeDisabled();
  });
});

// We recommend installing an extension to run jest tests.
//   expect(mockLogin).toHaveBeenCalledTimes(1);
// });

// it('renders Remember me checkbox', () => {
//   render(<LoginTab loginFunction={jest.fn()} />);
//   expect(screen.getByLabelText(/Remember me/i)).toBeInTheDocument();
// });

// it('renders Forgot your password link', () => {
//   render(<LoginTab loginFunction={jest.fn()} />);
//   expect(screen.getByText(/Forgot your password/i)).toBeInTheDocument();
// });
//});
