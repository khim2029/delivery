import { json } from "@remix-run/node";

export const validateInPutString = (formData: string[]) => {
  for (const data of formData) {
    if (typeof data !== "string" || data.length === 0) {
      return json(
        { errors: { body: null, res: "Title is required" } },
        { status: 400 }
      );
    }
  }
};

export const validateInPutInteger = (formData: number[]) => {
  for (const data of formData) {
    if (typeof data !== "number" || data.toString().length === 0) {
      return json(
        { errors: { body: null, res: `${data} is required` } },
        { status: 400 }
      );
    }
  }
};
