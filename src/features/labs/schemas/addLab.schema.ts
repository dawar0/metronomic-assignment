import { z } from "zod";

export const addLabSchema = z.object({
  labName: z.string().min(2, {
    message: "Lab Name must be at least 2 characters.",
  }),
  providerGroup: z.string().min(1),
  providerUnit: z.string().min(1),
  address: z.string().min(1),
  state: z.string().min(1),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  officePhone: z.string().min(1),
  mobile: z.string().min(1),
  emailId: z.string().email("Invalid email address"),
  portalTimeZone: z.string().min(1),
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
