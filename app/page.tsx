"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import EachField from "@/components/EachField";
import { EachSelect } from "@/components/EachSelect";
import EachSwitch from "@/components/EachSwitch";

const formSchema = z.object({
  Name: z.string().min(6, { message: "Name must be at least 6 characters" }),
  FatherzName: z
    .string()
    .min(6, { message: "Name must be at least 6 characters" }),
  Agegroup: z
    .string()
    .min(1, { message: "Select atleat one value" })
    .optional(),
  Gender: z.string().min(1, { message: "Select atleat one value" }).optional(),

  Profession: z
    .string({
      required_error: "This field is requiredd",
    })
    .min(1, { message: "This field is required" }),
  PreviousExperience: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
  Qualification: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
  AvailableGadgets: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
  City: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
  Country: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
  WhatsappNumber: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
  JoinWhatsapp: z.boolean().default(false).optional(),
  WordOfQuran: z.boolean().default(false).optional(),
  SocialMedia: z.boolean().default(false).optional(),
  VideoPhotoEditing: z.boolean().default(false).optional(),
  ManageWebsites: z.boolean().default(false).optional(),
  ITRelated: z.boolean().default(false).optional(),
  WhyFriend: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
  HowHelpUs: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
  HowManyHours: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
});

export default function Home() {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      FatherzName: "",
      Profession: "",
      Agegroup: "",
      Gender: "",
      PreviousExperience: "",
      Qualification: "",
      AvailableGadgets: "",
      City: "",
      Country: "",
      WhatsappNumber: "",
      JoinWhatsapp: false,
      WordOfQuran: false,
      SocialMedia: false,
      VideoPhotoEditing: false,
      ManageWebsites: false,
      ITRelated: false,
      WhyFriend: "",
      HowHelpUs: "",
      HowManyHours: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  function ResetNow(values: z.infer<typeof formSchema>) {
    values.Name = "";
    values.FatherzName = "";
    values.Profession = "";
    values.Agegroup = "";
    values.Gender = "";
    values.PreviousExperience = "";
    values.Qualification = "";
    values.AvailableGadgets = "";
    values.City = "";
    values.Country = "";
    values.WhatsappNumber = "";
    values.JoinWhatsapp = false;
    values.WordOfQuran = false;
    values.SocialMedia = false;
    values.VideoPhotoEditing = false;
    values.ManageWebsites = false;
    values.ITRelated = false;
    values.WhyFriend = "";
    values.HowHelpUs = "";
    values.HowManyHours = "";
    console.log(values);
  }
  const CNAME = "w-full   my-2 px-5";

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl text-center my-8">Volunteer Registration Form</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className=" flex flex-wrap  ">
            <EachField
              type="text"
              control={form.control}
              Label="Name"
              Name="Name"
              placeHolder="Name"
              CName={CNAME}
            />
            <EachField
              type="text"
              control={form.control}
              Label="Father's Name"
              Name="FatherzName"
              placeHolder="Father's Name"
              CName={CNAME}
            />
            <EachField
              type="text"
              control={form.control}
              Label="Profession"
              Name="Profession"
              placeHolder="Your Profession"
              CName={CNAME}
            />
            <EachSelect
              control={form.control}
              Label="Gender"
              Name="Gender"
              MainLabel="Select your gender"
              Vals={["male", "femal"]}
              CName={CNAME}
            />

            <EachSelect
              control={form.control}
              Label="Age Group"
              Name="Agegroup"
              MainLabel="Select your age group"
              Vals={["12-18", "18-25", "26-35", "36-45", "46-55", "55+"]}
              CName={CNAME}
            />
            <EachField
              type="text"
              control={form.control}
              Label="Previous Experience"
              Name="PreviousExperience"
              placeHolder="Your Experience"
              CName={CNAME}
            />
            <EachField
              type="text"
              control={form.control}
              Label="Qualification"
              Name="Qualification"
              placeHolder="B.A / BSc / M.S / Phd"
              CName={CNAME}
            />
            <EachField
              type="text"
              control={form.control}
              Label="Available Gadgets"
              Name="AvailableGadgets"
              placeHolder="Mobile / PC / Laptop / Tablet"
              CName={CNAME}
            />
            <EachField
              type="text"
              control={form.control}
              Label="City"
              Name="City"
              placeHolder="Your City"
              CName={CNAME}
            />
            <EachField
              type="text"
              control={form.control}
              Label="Country"
              Name="Country"
              placeHolder="Your Country"
              CName={CNAME}
            />
            <EachField
              type="number"
              control={form.control}
              Label="Whatsapp Contact Number"
              Name="WhatsappNumber"
              placeHolder="Your Country"
              CName={CNAME}
            />
            <EachSwitch
              disabled={false}
              control={form.control}
              Label="Would you like to join our Whatsapp group ?"
              Name="JoinWhatsapp"
              CName={CNAME}
            />
            <EachSwitch
              disabled={false}
              control={form.control}
              Label="Would you like to help us spread word of Quran ?"
              Name="WordOfQuran"
              CName={CNAME}
            />
            <EachSwitch
              disabled={form.getValues("WordOfQuran") === false}
              control={form.control}
              Label="Would you like to help us manage our social media accounts ?"
              Name="SocialMedia"
              CName={CNAME}
            />
            <EachSwitch
              disabled={form.getValues("WordOfQuran") === false}
              control={form.control}
              Label="Would you like to offer video and Photo editing assistance ?"
              Name="VideoPhotoEditing"
              CName={CNAME}
            />
            <EachSwitch
              disabled={form.getValues("WordOfQuran") === false}
              control={form.control}
              Label="Would you like to help us manage our websites ?"
              Name="ManageWebsites"
              CName={CNAME}
            />
            <EachSwitch
              disabled={form.getValues("WordOfQuran") === false}
              control={form.control}
              Label="Would you like to offer IT related assistance (Programming, AI & Animations e.t.c) ?"
              Name="ITRelated"
              CName={CNAME}
            />

            <EachField
              type="text"
              control={form.control}
              Label="Why do you intend to become a volunteer ?"
              Name="WhyFriend"
              placeHolder=""
              CName={CNAME}
            />
            <EachField
              type="text"
              control={form.control}
              Label="If you have a unique idea to help us, please let us know ?"
              Name="HowHelpUs"
              placeHolder=""
              CName={CNAME}
            />
            <EachField
              type="text"
              control={form.control}
              Label="How Many Hours can you spare for us weekly ?"
              Name="HowManyHours"
              placeHolder=""
              CName={CNAME}
            />
          </div>

          <Button type="submit">Submit</Button>
          <Button type="reset">Rest</Button>
        </form>
      </Form>
    </div>
  );
}
