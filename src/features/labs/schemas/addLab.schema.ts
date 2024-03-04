import { z } from "zod";

export const addLabSchema = z.object({
  labName: z.string().min(2, {
    message: "Lab Name must be at least 2 characters.",
  }),
  providerGroup: z.string().min(1, {
    message: "Required",
  }),
  providerUnit: z.string().min(1, {
    message: "Required",
  }),
  address: z.string().min(1, {
    message: "Required",
  }),
  state: z.string().min(1, {
    message: "Required",
  }),
  city: z.string().min(1, {
    message: "Required",
  }),
  zipCode: z.string().min(1, {
    message: "Required",
  }),
  officePhone: z.string().min(1, {
    message: "Required",
  }),
  mobile: z.string().min(1, {
    message: "Required",
  }),
  emailId: z.string().email("Invalid email address"),
  portalTimeZone: z.string().min(1, {
    message: "Required",
  }),
});

export const addLabDefaultValues = {
  labName: "",
  providerGroup: "",
  providerUnit: "",
  address: "",
  state: "",
  city: "",
  zipCode: "",
  officePhone: "",
  mobile: "",
  emailId: "",
  portalTimeZone: "",
};
