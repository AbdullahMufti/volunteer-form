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
import Link from "next/link";

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
  CNIC: z.string().optional(),
  Profession: z
    .string({
      required_error: "This field is required",
    })
    .min(1, { message: "This field is required" }),
  PreviousExperience: z
    .string({ required_error: "This field is required" })
    .min(1, { message: "This field is required" }),
  Qualification: z
    .string({ required_error: "This field is required" })
    .min(1, { message: "This field is required" }),
  AvailableGadgets: z
    .string({ required_error: "This field is required" })
    .min(1, { message: "This field is required" }),
  City: z
    .string({ required_error: "This field is required" })
    .min(1, { message: "This field is required" }),
  Country: z
    .string({ required_error: "This field is required" })
    .min(1, { message: "This field is required" }),
  WhatsappNumber: z
    .string({ required_error: "This field is required" })
    .min(1, { message: "This field is required" }),
  HowHelpUs: z
    .string({ required_error: "This field is required" })
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
              onClick={() => setEnglish(true)}>
              English
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setEnglish(false)}>
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
            <h2 className="text-xl text-center my-8">
              فرینڈز آف المورد <span className="text-sm"></span>
            </h2>
          </div>
        ) : (
          <div dir="ltr" className="leading-10 mx-10 text-justify">
            <h2 className="text-xl text-center my-8">
              Friends of Al Mawrid <span className="text-sm"></span>
            </h2>
          </div>
        )}

        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
          <iframe
            src="https://drive.google.com/file/d/1RoT4Fcjaj0gVhJ4xlNip2SQj4G_DBF2X/preview"
            allow="autoplay"
            className="absolute top-0 left-0 w-full h-full border-0"></iframe>
        </div>
        {!English ? (
          <div dir="rtl">
            <div>
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
              <p>
                &nbsp;فرینڈز آف المورد کو درج ذیل پروگرامز میں ترجیحی بنیادوں پر
                شمولیت کا موقع دیا جائے گا (ان میں سے کچھ پروگرامز محض فرینڈز آف
                المورد کے لئے ترتیب دئیے گئے ہیں جن میں صرف وہی شرکت کر سکتے
                ہیں):
                <br />
              </p>{" "}
              <br />
              <ol type="I" className="list-decimal">
                <li>
                  غامدی صاحب کے ساتھ نشستیں
                  <br />
                  جاوید احمد صاحب غامدی کے ساتھ ہفتہ وار آن لائن نشستوں کا
                  اہتمام کیا جارہا ہے۔ ان نشستوں میں غامدی صاحب کے ساتھ باقاعدہ
                  سوال و جواب کا موقع فراہم کیا جاتا ہے۔ ان پروگرامز میں فرینڈز
                  آف المورد کو ترجیحی بنیادوں پر شامل کیا جائے گا۔
                  <br />
                </li>{" "}
                <br />
                <li>
                  اوپن مائیک / بیلی بیٹھک
                  <br />
                  اوپن مائیک سیشن گزشتہ چار برس سے المورد لاہور میں منعقد کیا
                  جارہا ہے۔ اب اس سیشن کو ملکی سطح پر پھیلانے کے لیے اقدامات کیے
                  جارہے ہیں۔ جس کا آغاذ پنجاب کے مختلف شہروں سے ہونے جارہا ہے۔
                  فرینڈز آف المورد اپنے شہروں اور قصبوں میں ان سیشنز کے انعقاد
                  میں معاون ثابت ہو سکتے ہیں۔
                  <br />
                </li>{" "}
                <br />
                <li>
                  تذکیر بالقرآن کی نشست
                  <br />
                  دانش سرا میں تذکیر بالقرآن کی مختلف نشستوں کا اہتمام کیا جارہا
                  ہے۔ فرینڈز آف المورد کے لیے دانش سرا میں تذکیر بالقرآن کے سہ
                  ماہی تین روزہ پروگرام کا انعقاد کیا جا رہا ہے۔ اس پروگرام میں
                  انسانی نفس کی تذکیر و تربیت کے لیے قرآن مجید سے رہنمائی حاصل
                  کی جائے گی۔ جس میں دیگر شہروں سے آنے والے احباب کے لیے رہائش
                  کا بندوبست بھی کیا جائے گا۔
                </li>
                <br />
                <br />
                <li>
                  دانش سرا (خانقاہ)
                  <br />
                  المورد کے مختلف اسکالرز روزانہ کی بنیاد پر کچھ وقت کے لیے دانش
                  سرا میں عوامی ملاقاتوں کے لیے موجود ہوتے ہیں۔ جہاں لوگ ذاتی،
                  علمی اور معاشرتی حوالے سے اپنے سوالات علما کے سامنے رکھ سکتے
                  ہیں۔
                </li>
                <br />
                <li>
                  قرآن اسٹڈی سرکل
                  <br />
                  دین میں بنیادی حیثیت قرآن مجید کو حاصل ہے۔ المورد میں باقاعدہ
                  ہر ہفتے ڈاکٹر ساجد حمید صاحب کے درسِ قرآن کا انعقاد کیا جاتا
                  ہے۔&nbsp; فرینڈز آف المورد اس پروگرام میں اور دیگر قرآن اسٹڈی
                  سرکلز کا باقاعدہ حصہ بن سکتے ہیں۔
                </li>
                <br />
                <li>
                  بک کلب سیشنز
                  <br />
                  المورد سوسائٹی کے زیرِ انتظام المورد میں ماہانہ بُک کلب سیشن
                  کا انعقاد کیا جاتا ہے۔ اس سیشن میں صاحبِ کتاب کے ساتھ کتاب پر
                  گفتگو کا موقع میسر آتا ہے۔ فرینڈز آف المورد کو ان سیشنز میں
                  ترجیحی بنیادوں پر شامل کیا جائے گا۔
                </li>
                <br />
                <li>
                  محاضرات سیریز
                  <br />
                  المورد سوسائٹی کے زیر انتظام ماہانہ ایک ایسی نشست کا اہتمام
                  کیا جاتا ہے۔ جہاں ملک کے نامور اسکالرز کو مختلف علمی، سماجی و
                  سیاسی موضوعات پر گفتگو کے لیے مدعو کیا جاتا ہے۔ فرینڈز آف
                  المورد کو ان سیشنز میں ترجیحی نشستیں فراہم کی جائیں گی۔
                </li>
                <br />
                <li>
                  رمضان المبارک تراویح مع ترجمۂ قرآن کا انتظام
                  <br />
                  دانش سرا میں رمضان کے دوران میں تراویح مع ترجمۂ قرآن کا
                  انتظام ہو گا۔
                </li>
                <br />
                <li>
                  رمضان المبارک میں افطار کا اہتمام
                  <br />
                  دانش سرا میں رمضان کے مہینے میں ہر جمعرات کو اوپن مائیک سیشن
                  کے ساتھیوں کے ساتھ افطار کا اہتمام کیا جاتا ہے۔
                </li>
                <br />
                <li>
                  عید ملن پارٹی
                  <br />
                  المورد سوسائٹی کے زیرانتظام احباب کے مل بیٹھنے، باہم گفت و
                  شنید اور تفریح کے لیے سال میں ایک مرتبہ عید ملن پارٹی کا
                  اہتمام ہوتا ہے۔
                </li>
                <br />
                <li>
                  دبستان شبلی کے اکابرین کی یاد میں سالانہ کانفرنس کا انعقاد
                  <br />
                  المورد میں دبستان شبلی کے اکابر علما کے دین اسلام کی ترویج میں
                  کردار اور سماجی خدمات کی یاد میں مختلف کانفرنسوں کا انعقاد ہو
                  گا۔
                </li>
              </ol>
              <br />
              المورد کے اسکالرز کے مختلف شہروں کے دورے فرینڈز آف المور علماء
              کرام کو اپنے شہروں میں ملاقاتوں کے لیے بلا سکیں گے۔
              <br />
              <br />
              <div>
                <span>
                  جاوید احمد صاحب غامدی کے پاکستان میں ادارے المورد سے وابستہ
                  ہونے کے لئے درج ذیل فارم فل کریں۔
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="leading-10 mx-10 text-justify">
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
            onReset={ResetNow}>
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
                placeHolder="Profession"
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
                Label="Age"
                Name="Agegroup"
                placeHolder="Age"
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
              <SelectField
                Name="Country"
                CName={CNAME}
                control={form.control}
                Label="Select your country"
                MainLabel="Country"
                Vals={[
                  "Afghanistan",
                  "Åland Islands",
                  "Albania",
                  "Algeria",
                  "American Samoa",
                  "Andorra",
                  "Angola",
                  "Anguilla",
                  "Antarctica",
                  "Antigua and Barbuda",
                  "Argentina",
                  "Armenia",
                  "Aruba",
                  "Australia",
                  "Austria",
                  "Azerbaijan",
                  "Bahamas",
                  "Bahrain",
                  "Bangladesh",
                  "Barbados",
                  "Belarus",
                  "Belgium",
                  "Belize",
                  "Benin",
                  "Bermuda",
                  "Bhutan",
                  "Bolivia",
                  "Bosnia and Herzegovina",
                  "Botswana",
                  "Bouvet Island",
                  "Brazil",
                  "British Indian Ocean Territory",
                  "Brunei Darussalam",
                  "Bulgaria",
                  "Burkina Faso",
                  "Burundi",
                  "Cambodia",
                  "Cameroon",
                  "Canada",
                  "Cape Verde",
                  "Cayman Islands",
                  "Central African Republic",
                  "Chad",
                  "Chile",
                  "China",
                  "Christmas Island",
                  "Cocos (Keeling) Islands",
                  "Colombia",
                  "Comoros",
                  "Congo",
                  "Congo, The Democratic Republic of The",
                  "Cook Islands",
                  "Costa Rica",
                  "Cote D'ivoire",
                  "Croatia",
                  "Cuba",
                  "Cyprus",
                  "Czech Republic",
                  "Denmark",
                  "Djibouti",
                  "Dominica",
                  "Dominican Republic",
                  "Ecuador",
                  "Egypt",
                  "El Salvador",
                  "Equatorial Guinea",
                  "Eritrea",
                  "Estonia",
                  "Ethiopia",
                  "Falkland Islands (Malvinas)",
                  "Faroe Islands",
                  "Fiji",
                  "Finland",
                  "France",
                  "French Guiana",
                  "French Polynesia",
                  "French Southern Territories",
                  "Gabon",
                  "Gambia",
                  "Georgia",
                  "Germany",
                  "Ghana",
                  "Gibraltar",
                  "Greece",
                  "Greenland",
                  "Grenada",
                  "Guadeloupe",
                  "Guam",
                  "Guatemala",
                  "Guernsey",
                  "Guinea",
                  "Guinea-bissau",
                  "Guyana",
                  "Haiti",
                  "Heard Island and Mcdonald Islands",
                  "Holy See (Vatican City State)",
                  "Honduras",
                  "Hong Kong",
                  "Hungary",
                  "Iceland",
                  "India",
                  "Indonesia",
                  "Iran, Islamic Republic of",
                  "Iraq",
                  "Ireland",
                  "Isle of Man",
                  "Israel",
                  "Italy",
                  "Jamaica",
                  "Japan",
                  "Jersey",
                  "Jordan",
                  "Kazakhstan",
                  "Kenya",
                  "Kiribati",
                  "Korea, Democratic People's Republic of",
                  "Korea, Republic of",
                  "Kuwait",
                  "Kyrgyzstan",
                  "Lao People's Democratic Republic",
                  "Latvia",
                  "Lebanon",
                  "Lesotho",
                  "Liberia",
                  "Libyan Arab Jamahiriya",
                  "Liechtenstein",
                  "Lithuania",
                  "Luxembourg",
                  "Macao",
                  "Macedonia, The Former Yugoslav Republic of",
                  "Madagascar",
                  "Malawi",
                  "Malaysia",
                  "Maldives",
                  "Mali",
                  "Malta",
                  "Marshall Islands",
                  "Martinique",
                  "Mauritania",
                  "Mauritius",
                  "Mayotte",
                  "Mexico",
                  "Micronesia, Federated States of",
                  "Moldova, Republic of",
                  "Monaco",
                  "Mongolia",
                  "Montenegro",
                  "Montserrat",
                  "Morocco",
                  "Mozambique",
                  "Myanmar",
                  "Namibia",
                  "Nauru",
                  "Nepal",
                  "Netherlands",
                  "Netherlands Antilles",
                  "New Caledonia",
                  "New Zealand",
                  "Nicaragua",
                  "Niger",
                  "Nigeria",
                  "Niue",
                  "Norfolk Island",
                  "Northern Mariana Islands",
                  "Norway",
                  "Oman",
                  "Pakistan",
                  "Palau",
                  "Palestinian Territory, Occupied",
                  "Panama",
                  "Papua New Guinea",
                  "Paraguay",
                  "Peru",
                  "Philippines",
                  "Pitcairn",
                  "Poland",
                  "Portugal",
                  "Puerto Rico",
                  "Qatar",
                  "Reunion",
                  "Romania",
                  "Russian Federation",
                  "Rwanda",
                  "Saint Helena",
                  "Saint Kitts and Nevis",
                  "Saint Lucia",
                  "Saint Pierre and Miquelon",
                  "Saint Vincent and The Grenadines",
                  "Samoa",
                  "San Marino",
                  "Sao Tome and Principe",
                  "Saudi Arabia",
                  "Senegal",
                  "Serbia",
                  "Seychelles",
                  "Sierra Leone",
                  "Singapore",
                  "Slovakia",
                  "Slovenia",
                  "Solomon Islands",
                  "Somalia",
                  "South Africa",
                  "South Georgia and The South Sandwich Islands",
                  "Spain",
                  "Sri Lanka",
                  "Sudan",
                  "Suriname",
                  "Svalbard and Jan Mayen",
                  "Swaziland",
                  "Sweden",
                  "Switzerland",
                  "Syrian Arab Republic",
                  "Taiwan",
                  "Tajikistan",
                  "Tanzania, United Republic of",
                  "Thailand",
                  "Timor-leste",
                  "Togo",
                  "Tokelau",
                  "Tonga",
                  "Trinidad and Tobago",
                  "Tunisia",
                  "Turkey",
                  "Turkmenistan",
                  "Turks and Caicos Islands",
                  "Tuvalu",
                  "Uganda",
                  "Ukraine",
                  "United Arab Emirates",
                  "United Kingdom",
                  "United States",
                  "United States Minor Outlying Islands",
                  "Uruguay",
                  "Uzbekistan",
                  "Vanuatu",
                  "Venezuela",
                  "Viet Nam",
                  "Virgin Islands, British",
                  "Virgin Islands, U.S.",
                  "Wallis and Futuna",
                  "Western Sahara",
                  "Yemen",
                  "Zambia",
                  "Zimbabwe",
                ]}
              />
              {form.watch("Country") === "Pakistan" && (
                <InputField
                  type="text"
                  control={form.control}
                  Label="CNIC"
                  Name="CNIC"
                  placeHolder={`Enter your CNIC Number`}
                  CName={CNAME}
                />
              )}

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
