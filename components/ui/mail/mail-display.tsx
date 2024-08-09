"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormField,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Upload } from "lucide-react";

import { useRouter } from "next/navigation";

import { mailSchema } from "../../../validation/mail/mail";
import { Textarea } from "../textarea";

import jsPDF from "jspdf";
import * as XLSX from "xlsx";

import { trucks } from "@/utils/truck-arrays";

type Props = {};

const SendMail = (props: Props) => {
  const { toast } = useToast();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [showXlsxPreview, setShowXlsxPreview] = useState(false);
  const [xlsxContent, setXlsxContent] = useState<string>("");
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const form = useForm<z.infer<typeof mailSchema>>({
    resolver: zodResolver(mailSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  const handleClickSignin = async (formValues: z.infer<typeof mailSchema>) => {
    console.log(formValues);

    // try {
    //   setIsLoading(true);
    //   const formData = new FormData();
    //   formData.append("subject", formValues.subject);
    //   formData.append("message", formValues.message);
    //   if (attachment) {
    //     formData.append("attachment", attachment);
    //   }
    //   setIsLoading(true);

    //   if (data?.success) {
    //     toast({
    //       title: "Success",
    //       description: "Message sent successfully",

    //       duration: 900,
    //     });
    //     setIsLoading(false);
    //   } else {
    //     toast({
    //       title: "Failed",
    //       description: "Error occurred while sending the message",
    //       variant: "destructive",
    //       duration: 900,
    //     });
    //     setIsLoading(false);
    //   }
    // } catch (error) {
    //   toast({
    //     title: "Error (Server)",
    //     description: "Message sending failed",
    //     variant: "destructive",
    //     duration: 900,
    //   });
    //   setIsLoading(false);
    // }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Truck List", 10, 10);
    trucks.forEach((truck: any, index: any) => {
      doc.text(
        `${truck.name} - ${truck.manufacturer} - ${truck.year}`,
        10,
        20 + index * 10
      );
    });
    doc.save("trucks.pdf");
  };

  const handleDownloadXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(trucks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Trucks");
    XLSX.writeFile(workbook, "trucks.xlsx");
  };

  const handlePrint = () => {
    const printContent = trucks
      .map(
        (truck: any) => `${truck.name} - ${truck.manufacturer} - ${truck.year}`
      )
      .join("\n");
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = `<pre>${printContent}</pre>`;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      // Handle the selected file
      console.log("Selected file:", file);
    }
  };

  const handlePreviewPDF = () => {
    const doc = new jsPDF();
    doc.text("Truck List", 10, 10);
    trucks.forEach((truck: any, index: any) => {
      doc.text(
        `${truck.name} - ${truck.manufacturer} - ${truck.year}`,
        10,
        20 + index * 10
      );
    });
    const pdfUrl = URL.createObjectURL(doc.output("blob"));
    window.open(pdfUrl, "_blank");
  };

  const handlePreviewXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(trucks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Trucks");

    // Generate the XLSX file and create a Blob URL for preview
    const xlsxBlob = new Blob(
      [XLSX.write(workbook, { bookType: "xlsx", type: "array" })],
      { type: "application/octet-stream" }
    );
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const html = XLSX.utils.sheet_to_html(
        workbook.Sheets[workbook.SheetNames[0]]
      );
      setXlsxContent(html);
      setShowXlsxPreview(true);
    };

    fileReader.readAsArrayBuffer(xlsxBlob);
  };

  const closeModal = () => {
    setShowXlsxPreview(false);
  };

  return (
    <div className="flex flex-col h-screen gap-2 p-4 pt-0">
      <div className="flex justify-center items-center mb-4 mt-4">
        <div className="grid grid-cols-3 gap-4">
          <Button
            type="button"
            onClick={handleDownloadPDF}
            className="bg-blue-500"
          >
            Download PDF
          </Button>
          <Button
            type="button"
            onClick={handleDownloadXLSX}
            className="bg-green-500"
          >
            Download XLSX
          </Button>
          <Button type="button" onClick={handlePrint} className="bg-orange-500">
            Print
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <Button
            type="button"
            onClick={handlePreviewPDF}
            className="bg-indigo-500"
          >
            Preview PDF
          </Button>
          <Button
            type="button"
            onClick={handlePreviewXLSX}
            className="bg-teal-500"
          >
            Preview XLSX
          </Button>
          <Button onClick={handleButtonClick} className="bg-red-500 ">
            <Upload className="w-5 h-5 mr-2" />
            Upload File
          </Button>
        </div>
      </div>
      <div className="flex justify-center align-middle h-full items-center">
        <Card className="w-[530px] h-fit">
          <CardHeader>
            <CardTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Compose Email
              <CardDescription className="mt-1">
                Enter email and click on send.
              </CardDescription>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                className="space-y-2"
                onSubmit={form.handleSubmit(handleClickSignin)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[220px]"
                          placeholder="Start writing email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button
                    disabled={isLoading}
                    className="mt-4 w-fit bg-gradient-to-r from-violet-400 to-violet-500 float-end mb-4"
                    type="submit"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      {showXlsxPreview && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">XLSX Preview</h2>
              <Button onClick={closeModal} className="bg-red-500">
                Close
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: xlsxContent }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SendMail;
