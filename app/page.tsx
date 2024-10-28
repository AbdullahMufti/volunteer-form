"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import {
  InputField,
  SelectField,
  SwitchField,
  TextArea,
} from "@/components/CustomField";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

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
  CNIC: z.string().min(13, { message: "Enter your CNIC number" }),
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
  HowHelpUs: z
    .string({ required_error: "This field is requiredd" })
    .min(1, { message: "This field is required" }),
});

export default function Home() {
  const [Result, setResult] = useState(false);
  const [ServerMessage, setServerMessage] = useState("");

  const [English, setEnglish] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      FatherzName: "",
      Profession: "",
      Agegroup: "",
      Gender: "",
      CNIC: "",
      PreviousExperience: "",
      Qualification: "",
      AvailableGadgets: "",
      City: "",
      Country: "",
      WhatsappNumber: "",
      HowHelpUs: "",
    },
  });
  async function SaveToDB(kQuery: string) {
    const formData = new FormData();
    formData.append("ans", kQuery);
    try {
      const response = await axios.post("reg.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data);
      setServerMessage(response.data);
      setResult(true);
      ResetNow();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unexpected error occurred");
      }
    }
  }
  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = ``;

    const kQuery = `(
      "${values.Name}", "${values.FatherzName}", "${values.Profession}", "${values.Agegroup}", "${values.Gender}", "${values.CNIC}", "${values.PreviousExperience}", "${values.Qualification}", "${values.AvailableGadgets}", "${values.City}", "${values.Country}", "${values.WhatsappNumber}",  "${values.HowHelpUs}"
    )`;
    SaveToDB(kQuery);
  }
  function ResetNow() {
    form.reset();
  }
  const CNAME = "w-full   my-2 px-5";

  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="leading-10 mx-10 text-justify">
        <div className="">
          {!English ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded overflow-visible"
              onClick={() => setEnglish(true)}
            >
              English
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setEnglish(false)}
            >
              اردو
            </button>
          )}
        </div>
        <div className="flex justify-center">
          <img
            src="/society.jpeg"
            alt="Picture of the author"
            className="w-60 h-60 mx-atuo"
          />
        </div>

        {!English ? (
          <div dir="rtl">
            <div>
              <h2 className="text-xl text-center my-8">فرینڈز آف المورد</h2>

              <div>
                <span>السلام علیکم،</span>
              </div>
              <br />
              <div>
                <span>
                  آئیے، مل کر خدا کا پیغام عام کریں۔ دین کے بہت سے احکام ہیں، جن
                  پر ہم شب روز عمل کرتے ہیں، ان میں ایک حکم اللہ کے دین کی نصرت،
                  یعنی مدد ہے۔ اس وقت ، اسلام سمیت تمام ادیان کو بہت سے چیلنجز
                  کا سامنا ہے، اس لیے ہم مسلمانوں کا فرض ہے کہ اس مشکل دور میں
                  اسلام کو درپیش ان مسائل سے نکالیں۔ المورد اس بات پر یقین رکھتا
                  ہے کہ تمام چیلنجز کا مقابلہ اسلام کے صحیح فہم کو پھیلا کر کیا
                  جاسکتا ہے۔
                </span>
              </div>
              <br />
              <div>
                <span>
                  تو آئیے، خدا کے خالص پیغام کو تمام انسانوں تک پہنچانے کے لیے
                  اپنی پیشہ ورانہ خدمات رضا کارانہ طور پر فراہم کرکے المورد کے
                  ساتھ عملی تعاون کیجیے۔
                </span>
              </div>
              <br />
              <br />
              <div>
                <span>جوائن کرنے والوں کو درج ذیل فوائد حاصل ہوں گی:</span>
              </div>
              <br />
              <div>
                <span>
                  1۔ المورد سوسائٹی کی ایکٹیویٹیز (اوپن مائیک، سلسلۂ محاضرات
                  اور بک کلب وغیرہ) میں شامل ہونے کا موقع دیا جائے گا۔
                </span>
              </div>
              <br />
              <div>
                <span>
                  2: غامدی صاحب کے دورۂ پاکستان کے موقع پر منعقد کیے جانے والے
                  پروگرامز میں شرکت کے لیے ’فرینڈز آف المورد‘ کو ترجیح دی جائے
                  گی۔{" "}
                </span>
              </div>
              <br />
              <div>
                <span>
                  3-فرینڈز آف المورد کو دانش سرا (خانقاہ) کے پروگرامات اور
                  نشستوں میں ترجیح دی جائے گی۔
                </span>
              </div>
              <br />
              <div>
                <span>
                  4- فرینڈز آف المورد کے لیے ماہانہ ایک سیشن ہو گا، جس میں علما
                  کے ساتھ تربیتی اور علمی سوال و جواب کا موقع دیا جائے گا۔
                </span>
              </div>
              <br />
              <div>
                <span>
                  نوٹ: نیچے دیے گئے فارم کو فل کر کے ’فرینڈز آف المورد‘ میں
                  شمولیت اختیار کی جا سکتی ہے:{" "}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="leading-10 mx-10 text-justify">
            <h2 className="text-xl text-center my-8">Friends of Al Mawrid</h2>
            <p>
              Assalam o Alaikum! Let&apos;s come together to spread the message
              of God.
            </p>
            <p>
              In the teachings of Islam, there are many commands that we follow
              day and night. One of these commands is the support of the
              religion of Allah, which is known as &ldquo;Nusrat&ldquo; in
              Islam. At this time, Islam, like all other religions, faces many
              challenges. As Muslims, we must address the challenges confronting
              Islam during these difficult times. Al Mawrid believes that all
              challenges can be met by spreading the correct understanding of
              Islam.
            </p>
            <p>
              Let us actively collaborate with Al Mawrid by offering our
              professional and voluntary services to spread the unadulterated
              message of God to every corner.
            </p>
            <br />
            <p>Those who join us will receive the following benefits:</p>
            <p>
              1) The opportunity to participate in Al Mawrid Society activities
              (such as open mic sessions, lecture series and book clubs).
            </p>
            <p>
              2) Friends of Almawrid will be given preference to participate in
              the programs organized on the occasion of Javed Ahmad
              Ghamdi&apos;s visit to Pakistan.
            </p>
            <p>
              3) A monthly meetup for Friends, with educational sessions and
              question-and-answer opportunities with scholars.
            </p>
            <p>
              Note: By filling out the form below, one can opt for Friends of Al
              Mawrid membership.
            </p>
          </div>
        )}
      </div>

      <p>
        <br />
      </p>
      <h2 className="text-xl text-center my-8"> Registration Form</h2>
      {!Result && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
            onReset={ResetNow}
          >
            <div className=" flex flex-wrap  ">
              <InputField
                type="text"
                control={form.control}
                Label="Name"
                Name="Name"
                placeHolder="Name"
                CName={CNAME}
              />
              <InputField
                type="text"
                control={form.control}
                Label="Father's Name"
                Name="FatherzName"
                placeHolder="Father's Name"
                CName={CNAME}
              />
              <InputField
                type="text"
                control={form.control}
                Label="Profession"
                Name="Profession"
                placeHolder="Your Profession"
                CName={CNAME}
              />
              <SelectField
                control={form.control}
                Label="Gender"
                Name="Gender"
                MainLabel="Select your gender"
                Vals={["male", "female"]}
                CName={CNAME}
              />
              <InputField
                type="text"
                control={form.control}
                Label="CNIC"
                Name="CNIC"
                placeHolder="Enter your CNIC number"
                CName={CNAME}
              />

              <SelectField
                control={form.control}
                Label="Age Group"
                Name="Agegroup"
                MainLabel="Select your age group"
                Vals={["12-18", "18-25", "26-35", "36-45", "46-55", "55+"]}
                CName={CNAME}
              />
              <InputField
                type="text"
                control={form.control}
                Label="Previous Experience"
                Name="PreviousExperience"
                placeHolder="Your Experience"
                CName={CNAME}
              />
              <InputField
                type="text"
                control={form.control}
                Label="Qualification"
                Name="Qualification"
                placeHolder="B.A / BSc / M.S / Phd"
                CName={CNAME}
              />
              <InputField
                type="text"
                control={form.control}
                Label="Available Gadgets"
                Name="AvailableGadgets"
                placeHolder="Mobile / PC / Laptop / Tablet"
                CName={CNAME}
              />
              <InputField
                type="text"
                control={form.control}
                Label="Country"
                Name="Country"
                placeHolder="Your Country"
                CName={CNAME}
              />
              <InputField
                type="text"
                control={form.control}
                Label="City"
                Name="City"
                placeHolder="Your City"
                CName={CNAME}
              />
              <InputField
                type="tel"
                pattern="\+?[0-9\-]{1,}"
                control={form.control}
                Label="Whatsapp Contact Number"
                Name="WhatsappNumber"
                placeHolder="Your Whatsapp contact number"
                CName={CNAME}
              />
              <TextArea
                type="textarea"
                control={form.control}
                Label={
                  "How can you help Al-Mawrid in conveying the message of religion to the people?"
                }
                Label2={
                  "دین کا پیغام لوگوں تک پہنچانے میں آپ کس طرح المورد کی مدد کر سکتے ہیں؟"
                }
                Name="HowHelpUs"
                placeHolder=""
                CName={CNAME}
              />
            </div>
            <div className="flex justify-evenly mb-10">
              <Button type="submit">Submit</Button>
              <Button type="reset">Rest</Button>
            </div>
          </form>
        </Form>
      )}
      {Result && (
        <div>
          <div className="text-2xl text-center">Thank you for Registration</div>
          <br />
          <div className="text-2xl text-center">{ServerMessage}</div>
        </div>
      )}
    </div>
  );
}
