"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";

export async function createUser(
  prevState: string | undefined,
  formData: FormData
) {
  const parsedFormData = z.object({ email: z.string().email() }).safeParse({
    email: formData.get("email"),
  });

  if (!parsedFormData.success) {
    console.log("Invalid email");
    return "Invalid email";
  }
  const { email } = parsedFormData.data;

  try {
    await sql`INSERT INTO thedrop (email) VALUES (${email})`;
    console.log("User created successfully!");
    return "Thank you signing up!";
  } catch (error) {
    console.error("Failed to create user:", error);
    return "Failed to create user. Please refresh and try again!";
  }
}
