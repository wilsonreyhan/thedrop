"use client";

import "typeface-inter";
import Image from "next/image";
import vaultLogo from "@/app/public/valut_logo.webp";
import { createUser } from "../lib/actions";
import { useFormState } from "react-dom";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function LoginForm() {
  const [errorMessage, formAction] = useFormState(createUser, "");

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="w-12 h-12 mr-2"
            src={vaultLogo}
            alt="logo"
            width={52}
            height={52}
          />
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            theDrop
          </h1>
        </a>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h3 className="font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up for news on drops near you!
            </h3>
            <form action={formAction} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <div
                className="flex items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {errorMessage &&
                  (errorMessage == "Thank you signing up!" ? (
                    <>
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <p className="text-sm text-green-500">{errorMessage}</p>
                    </>
                  ) : (
                    <>
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                      <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                  ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
