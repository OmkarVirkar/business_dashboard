"use client";
import {
  ChartPieIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import ActiveButton from "./activeButton";
import H1 from "./h1";
import Paragraph from "./paragraph";
import Label from "./label";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";

export default function LoginTab({
  loginFunction,
  disableSignIn,
  setSignInDisable,
  emailId,
  password,
  rememberMeEnabled,
  setRememberMeEnabled,
  warningMessage,
}: {
  loginFunction: () => void;
  disableSignIn?: boolean;
  setSignInDisable?: (value: boolean) => void;
  emailId?: string;
  password?: string;
  rememberMeEnabled: boolean;
  setRememberMeEnabled: (value: boolean) => void;
  warningMessage?: string;
}) {
  return (
    <div
      data-testid="login-page"
      className="flex items-center justify-center min-h-screen bg-slate-200 dark:bg-slate-900"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-purple-900/20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-blue-600 dark:bg-purple-600 p-3 rounded-full mb-4">
            <ChartPieIcon className="w-8 h-8 text-white" />
          </div>
          <H1>SavorAdmin</H1>
          <Paragraph>Securely sign in to your dashboard.</Paragraph>
        </div>
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email-address" className="sr-only">
                Email
              </Label>
              <TextInput
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 text-lg rounded-lg transition placeholder-slate-400 bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-blue-500 dark:focus:ring-purple-500 focus:border-blue-500 dark:focus:border-purple-500"
                placeholder="Email"
                value={emailId ?? ""}
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <TextInput
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 text-lg rounded-lg transition placeholder-slate-400 bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-blue-500 dark:focus:ring-purple-500 focus:border-blue-500 dark:focus:border-purple-500"
                placeholder="Password"
                value={password ?? ""}
              />
            </div>
          </div>
          <div className="w-full">
            {warningMessage ? (
              <span className="text-red-500 inline-flex gap-2">
                <ExclamationTriangleIcon className="w-6" />
                {warningMessage}
              </span>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckboxInput
                id="remember-me"
                name="remember-me"
                className="h-4 w-4 rounded bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-blue-600 dark:text-purple-600 focus:ring-blue-500 dark:focus:ring-purple-500"
                disabled={disableSignIn ?? false}
                onChange={() => {
                  if (!disableSignIn && setRememberMeEnabled) {
                    setRememberMeEnabled(!rememberMeEnabled);
                  }
                }}
                checked={rememberMeEnabled}
              />
              <Label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-slate-900 dark:text-slate-300"
              >
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-purple-500 hover:text-blue-500 dark:hover:text-purple-400"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <ActiveButton
              type="button"
              disabled={disableSignIn ?? false}
              onClick={() => {
                loginFunction();
              }}
            >
              Sign in
            </ActiveButton>
          </div>
        </div>
      </div>
    </div>
  );
}
