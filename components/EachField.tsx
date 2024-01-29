import React from "react";
import { z } from "zod";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface FormProps {
  type: string;
  control: any;
  placeHolder: string;
  Name: string;
  Label: string;
  description?: string;
  CName?: string;
}

const EachField = ({
  control,
  placeHolder,
  Name,
  Label,
  description,
  CName,
  type,
}: FormProps) => {
  return (
    <div className={CName || ""}>
      <FormField
        control={control}
        name={Name}
        render={({ field }) => (
          <FormItem className="border p-4 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center justify-left ">
              <FormLabel className="text-left w-full md:w-80 leading-7">
                {Label}
              </FormLabel>
              <FormControl className="rounded-none border-black border-b-2 border-t-0 border-l-0 border-r-0 w-full mx-5">
                <Input placeholder={placeHolder} {...field} type={type} />
              </FormControl>
            </div>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage className="bg-red-900 text-yellow-200" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default EachField;
