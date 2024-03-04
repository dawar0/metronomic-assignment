import {
  Fieldset,
  FieldsetContent,
  FieldsetHeader,
  FieldsetTitle,
} from "@/components/ui/fieldset";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTimeZones } from "@/lib/hooks/useTimeZones";

import useLabProvider from "@/features/labs/hooks/useLabProvider/useLabProvider";
import {
  addLabSchema,
  addLabDefaultValues,
} from "@/features/labs/schemas/addLab.schema";

export function AddLabForm() {
  const form = useForm<z.infer<typeof addLabSchema>>({
    resolver: zodResolver(addLabSchema),
    defaultValues: addLabDefaultValues,
  });
  const { timeZones } = useTimeZones();
  const { providers } = useLabProvider();

  function onSubmit(values: z.infer<typeof addLabSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast("Lab has been created.");
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid place-items-center gap-[14px]"
      >
        <Fieldset className="w-[650px]">
          <FieldsetHeader>
            <FieldsetTitle>Details</FieldsetTitle>
          </FieldsetHeader>
          <FieldsetContent>
            <FormField
              control={form.control}
              name="labName"
              render={({ field }) => (
                <FormItem className="col-span-6">
                  <FormLabel className={"required-field"}>Lab Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter"
                      className="required"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-1" />
            <FormField
              control={form.control}
              name="providerGroup"
              render={({ field }) => (
                <FormItem className="col-span-6">
                  <FormLabel className={"required-field"}>
                    Provider Group
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        form.setValue("providerUnit", "");
                        return field.onChange({ target: { name, value } });
                      }}
                      value={form.watch("providerGroup")}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {providers.map((provider) => (
                          <SelectItem key={provider.id} value={provider.id}>
                            {provider.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="providerUnit"
              render={({ field }) => (
                <FormItem className="col-span-6">
                  <FormLabel className={"required-field"}>
                    Provider Unit
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {form.getValues("providerGroup") &&
                          providers
                            .find(
                              (provider) =>
                                provider.id === form.getValues("providerGroup")
                            )
                            ?.units.map((unit) => (
                              <SelectItem key={unit} value={unit}>
                                {unit}
                              </SelectItem>
                            ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"required-field"}>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Street Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="col-span-4">
                  <FormLabel className={"required-field"}>State</FormLabel>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="col-span-4">
                  <FormLabel className={"required-field"}>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Select" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem className="col-span-4">
                  <FormLabel className={"required-field"}>Zip Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="officePhone"
              render={({ field }) => (
                <FormItem className="col-span-6">
                  <FormLabel className={"required-field"}>
                    Office Phone
                  </FormLabel>
                  <FormControl>
                    <PhoneInput placeholder="Enter" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="col-span-6">
                  <FormLabel className={"required-field"}>Mobile</FormLabel>
                  <FormControl>
                    <PhoneInput placeholder="Enter" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"required-field"}>Email id</FormLabel>
                  <FormControl>
                    <Input placeholder="Street Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldsetContent>
        </Fieldset>
        <Fieldset className="w-[650px]">
          <FieldsetHeader>
            <FieldsetTitle className={"required-field"}>
              Portal Time Zone
            </FieldsetTitle>
          </FieldsetHeader>
          <FieldsetContent>
            <FormField
              control={form.control}
              name="portalTimeZone"
              render={({ field }) => (
                <FormItem className="col-span-6">
                  <FormLabel className={"required-field"}>
                    Provider Unit
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={form.watch("portalTimeZone")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeZones.map((timeZone) => (
                          <SelectItem key={timeZone.text} value={timeZone.text}>
                            {timeZone.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldsetContent>
        </Fieldset>
        <div className="w-full bg-[#D3DAE4] h-[1px]" />
        <div className="flex justify-start w-[650px]">
          <Button className="text-white font-bold bg-[#84B94F]" type="submit">
            Register Lab
          </Button>
        </div>
      </form>
    </Form>
  );
}
