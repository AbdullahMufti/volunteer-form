import React from "react";
import { z } from "zod";

import {
  FormMessage,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Control, FieldValues } from "react-hook-form";
import { Input } from "./ui/input";
import { Switch } from "@/components/ui/switch";

interface SwitchProps {
  control: any;
  Name: string;
  Label: string;
  description?: string;
  CName?: string;
  disabled?: boolean;
}

interface InputProps {
  type: string;
  control: any;
  placeHolder: string;
  Name: string;
  Label: string;
  Label2?: string;
  description?: string;
  CName?: string;
  pattern?: string;
}
interface SelectProps {
  control: any;
  MainLabel: string;
  Name: string;
  Label: string;
  description?: string;
  CName?: string;
  Vals: string[];
}

export const InputField = ({
  control,
  placeHolder,
  Name,
  Label,
  Label2,
  description,
  CName,
  type,
  pattern,
}: InputProps) => {
  return (
    <div className={CName || ""}>
      <FormField
        control={control}
        name={Name}
        render={({ field }) => (
          <FormItem className="border p-4 rounded-lg border-black">
            <div className="flex flex-col md:flex-row items-center justify-left ">
              <FormLabel className="text-left w-full md:w-80 leading-7">
                {Label}
              </FormLabel>
              {Label2 && (
                <FormLabel>
                  <div>
                    <br />
                    <FormLabel
                      className="text-right w-full md:w-80 leading-10"
                      dir="rtl"
                    >
                      {Label2}
                    </FormLabel>
                  </div>
                </FormLabel>
              )}
              <FormControl className="rounded-none border-black border-b-2 border-t-0 border-l-0 border-r-0 w-full mx-5">
                <Input
                  placeholder={placeHolder}
                  {...field}
                  type={type}
                  pattern={pattern}
                />
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
export const TextArea = ({
  control,
  placeHolder,
  Name,
  Label,
  Label2,
  description,
  CName,
  type,
  pattern,
}: InputProps) => {
  return (
    <div className={CName || ""}>
      <FormField
        control={control}
        name={Name}
        render={({ field }) => (
          <FormItem className="border p-4 rounded-lg border-black">
            <div className="flex flex-col md:flex-row items-center justify-left ">
              <FormLabel className="text-left w-full md:w-80 leading-7">
                {Label}
              </FormLabel>
              {Label2 && (
                <FormLabel>
                  <div>
                    <br />
                    <FormLabel
                      className="text-right w-full md:w-80 leading-10"
                      dir="rtl"
                    >
                      {Label2}
                    </FormLabel>
                  </div>
                </FormLabel>
              )}
              <FormControl className="rounded-none border-black border-2  w-full mx-5">
                <textarea rows={4} placeholder={placeHolder} {...field} />
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

export const SwitchField = ({
  control,
  Name,
  Label,
  description,
  CName,
  disabled,
}: SwitchProps) => {
  return (
    <div className={CName || ""}>
      <FormField
        disabled={disabled}
        control={control}
        name={Name}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 border-black">
            <div className="space-y-0.5">
              <FormLabel className="text-base">{Label}</FormLabel>
              {description && <FormDescription>{description}</FormDescription>}
            </div>
            {!disabled && (
              <div className="flex ">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={disabled}
                  />
                </FormControl>
                <div className="mx-5">{field.value ? "Yes" : "No"} </div>
              </div>
            )}
          </FormItem>
        )}
      />
    </div>
  );
};

export const SelectField = ({
  control,
  MainLabel,
  Name,
  Label,
  description,
  CName,
  Vals,
}: SelectProps) => {
  return (
    <div className={CName || ""}>
      <FormField
        control={control}
        name={Name}
        render={({ field }) => (
          <FormItem className="border p-4 rounded-lg border-black">
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
};
