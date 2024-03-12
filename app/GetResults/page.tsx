"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { InputField, SelectField, SwitchField } from "@/components/CustomField";
const formSchema = z.object({
  name: z.string().min(1, { message: "empty field not allowed" }),
  password: z.string().min(1, { message: "empty field not allowed" }),
});

interface ResultInter {
  Agegroup: string;
  AvailableGadgets: string;
  City: string;
  Country: string;
  DateTime: string;
  FatherzName: string;
  Gender: string;
  HowHelpUs: string;
  HowManyHours: string;
  ID: string;
  ITRelated: string;
  JoinWhatsapp: string;
  ManageWebsites: string;
  Name: string;
  PreviousExperience: string;
  Profession: string;
  Qualification: string;
  SocialMedia: string;
  Translation: string;
  VideoPhotoEditing: string;
  WhatsappNumber: string;
  WhyFriend: string;
  WordOfQuran: string;
}

const Results = () => {
  const [Result, setResult] = useState<undefined | ResultInter[]>();
  async function GetData(name: string, password: string) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);
    try {
      const response = await axios.post("ViewApplicants.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      setResult(response.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unexpected error occurred");
      }
    }
  }
  function SaveAsExcel() {
    var csv = [];
    var rows = document.querySelectorAll("table.ExcelData tr");

    for (var i = 0; i < rows.length; i++) {
      var row = [],
        cols = rows[i].querySelectorAll("td, th");

      for (var j = 0; j < cols.length; j++) {
        row.push(cols[j].innerHTML);
      }

      csv.push(row.join("	"));
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), "ApplicationData.xls");
  }

  function downloadCSV(csv: any, filename: any) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {
      type: "text/csv",
    });

    downloadLink = document.createElement("a");

    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(csvFile);

    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = ``;
    GetData(values.name, values.password);
  }

  function ResetNow() {
    form.reset();
  }
  const CNAME = "w-full md:w-1/2  my-2 px-5";
  const THeader = [
    "ID",
    "Name",
    "Father Name",
    "Profession",
    "Agegroup",
    "Gender",
    "Previous Experience",
    "Qualification",
    "Available Gadgets",
    "City",
    "Country",
    "Whatsapp Number",
    "Join Whatsapp",
    "Spread Word OfQuran",
    "SocialMedia",
    "Video Photo Editing",
    "Manage Websites",
    "Translation",
    "IT Related",
    "Why Friend",
    "How Help Us",
    "How Many Hours",
    "Date & Time",
  ];
  return (
    <div>
      <h1>Welcome to Friends of Almawrid Backend</h1>
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
              Name="name"
              placeHolder="Name"
              CName={CNAME}
            />
            <InputField
              type="password"
              control={form.control}
              Label="Password"
              Name="password"
              placeHolder="Password"
              CName={CNAME}
            />
          </div>
          <div className="flex justify-evenly mb-10">
            <Button type="submit">Submit</Button>
            <Button type="reset">Rest</Button>
          </div>
        </form>
      </Form>
      <div id="ResultFromDB" className=" px-10">
        {!!Result && (
          <div className="relative overflow-x-auto">
            <Button onClick={() => SaveAsExcel()} className="btn btn-primary">
              Download Data in excel format
            </Button>
            <table className="ExcelData w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {THeader.map((item, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="border-x-2 text-center border-black dark:border-white  px-6 py-3"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Result.map((item) => (
                  <tr
                    key={item.ID}
                    className="bg-bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.ID}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.Name}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.FatherzName}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.Profession}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.Agegroup}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.Gender}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.PreviousExperience}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.Qualification}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.AvailableGadgets}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.City}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.Country}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.WhatsappNumber}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.JoinWhatsapp === "0" ? "No" : "Yes"}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.WordOfQuran === "0" ? "No" : "Yes"}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.SocialMedia === "0" ? "No" : "Yes"}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.VideoPhotoEditing === "0" ? "No" : "Yes"}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.ManageWebsites === "0" ? "No" : "Yes"}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.Translation === "0" ? "No" : "Yes"}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.ITRelated === "0" ? "No" : "Yes"}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.WhyFriend}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.HowHelpUs}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.HowManyHours}
                    </td>
                    <td className="px-6 border-x-2 border-black dark:border-white py-4">
                      {item.DateTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
