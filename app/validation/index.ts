import { json } from "@remix-run/node";

export const validateInPutString = (formData: string[]) => {
  for (const data of formData) {
    if (typeof data === "string" && data.length === 0) {
      return json(
        { errors: { body: null, res: `${data} is required` } },
        { status: 400 }
      );
    }
    if (data.toString().length > 256) {
      return json(
        { errors: { body: null, res: `${data} is too long` } },
        { status: 400 }
      );
    }
  }
};

export const validateInPutInteger = (formData: number[]) => {
  for (const data of formData) {
    if (typeof data === "number" && data.toString().length === 0) {
      return json(
        { errors: { body: null, res: `${data} is required` } },
        { status: 400 }
      );
    }

    if (data.toString().length > 254) {
      return json(
        { errors: { body: null, res: `${data} is too long` } },
        { status: 400 }
      );
    }
  }
};
