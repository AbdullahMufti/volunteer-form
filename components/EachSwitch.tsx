import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

interface FormProps {
  control: any;
  Name: string;
  Label: string;
  description?: string;
  CName?: string;
  disabled?: boolean;
}

const EachSwitch = ({
  control,
  Name,
  Label,
  description,
  CName,
  disabled,
}: FormProps) => {
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
            <FormControl>
              {!disabled && (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={disabled}
                />
              )}
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default EachSwitch;
