import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Control, FieldValues } from "react-hook-form";
interface FormProps {
  control: any;
  MainLabel: string;
  Name: string;
  Label: string;
  description?: string;
  CName?: string;
  Vals: string[];
}

export function EachSelect({
  control,
  MainLabel,
  Name,
  Label,
  description,
  CName,
  Vals,
}: FormProps) {
  return (
    <div className={CName || ""}>
      <FormField
        control={control}
        name={Name}
        render={({ field }) => (
          <FormItem className="border p-4 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center justify-between ">
              <FormLabel className="text-left w-full md:w-80 leading-7">
                {Label}
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="rounded-none border-black border-b-2 border-t-0 border-l-0 border-r-0  mx-5">
                  <SelectTrigger>
                    <SelectValue placeholder={MainLabel} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Vals.map((Eachval, index) => (
                    <SelectItem key={index} value={Eachval}>
                      {Eachval}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage className="bg-red-900 text-yellow-200" />
          </FormItem>
        )}
      />
    </div>
  );
}
