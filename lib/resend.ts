
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY as string);

export const handleFormSubmission = async (data: {
  name: string;
  email: string;
  phone: string;
  course: string;
}) => {
  const { name, email, phone, course } = data;

  try {
    await resend.emails.send({
      from: "Aceternity Website <onboarding@resend.dev>",
      to: "abdulsamad6178@gmail.com",
      subject: "New Form Submission",
      html: `
        <h1>New Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>
      `,
    });
    return { success: true };
  } catch (error: any) {
    console.error("Error Sending Email:", error);
    return { success: false, error: error.message };
  }
};


// 'use client'
// import React, { useState } from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import Navbar from "@/components/Navbar";
// import { handleFormSubmission } from "../../../lib/resend";

// // Page component starts here
// const Page = () => {
//   // Declare hooks inside the Page component
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "" });
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle change for form inputs
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const result = await handleFormSubmission(formData);
//       if (result.success) {
//         alert("Email Sent Successfully! You will be replied in a few hours!");
//         setFormData({ name: "", email: "", phone: "", course: "" });
//       } else {
//         alert(`Failed to Send Email: ${result.error}`);
//       }
//     } catch (error) {
//       console.error("Error Submitting Form:", error);
//       alert("An Error Occurred, Please Try Again");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const contact = [
//     {
//       name: "name",
//       value: `${formData.name}`,
//       title: "First Name",
//       placeholder: "Enter your Name",
//       type: "text",
//     },
//     {
//       name: "email",
//       title: "Email Address",
//       value: `${formData.email}`,
//       placeholder: "Enter your Email Address",
//       type: "email",
//     },
//     {
//       name: "phone",
//       title: "Phone",
//       value: `${formData.phone}`,
//       placeholder: "Enter your Phone Number",
//       type: "tel",
//     },
//     {
//       name: "course",
//       title: "Joining Course",
//       value: `${formData.course}`,
//       placeholder: "Enter your Course",
//       type: "text",
//     },
//   ];

//   return (
//     <>
//       <div className="relative w-full flex items-center justify-center">
//         <Navbar />
//       </div>
//       <BackgroundBeamsWithCollision className="pt-6 md:pt-0 h-full">
//         <div className="md:pt-28 sm:pt-32 pt-36 flex justify-center items-center flex-col">
//           <form
//             className="my-8  w-64 sm:w-80"
//             onSubmit={handleSubmit} // Attach submit handler
//           >
//             <div className="label-input-container">
//               {contact.map((field, index) => (
//                 <div key={index} className="flex flex-col gap-1 md:mb-2">
//                   <Label
//                     htmlFor={field.name}
//                     className="md:text-xl sm:text-lg text-base"
//                   >
//                     {field.title}
//                   </Label>
//                   <Input
//                     id={field.name}
//                     name={field.name}
//                     type={field.type}
//                     placeholder={field.placeholder}
//                     value={field.value}
//                     onChange={handleChange}
//                     required
//                     autoComplete="false"
//                     className="sm:w-80  md:text-base text-sm"
//                   />
//                 </div>
//               ))}
//               <button
//                 disabled={isLoading}
//                 type="submit"
//                 className="text-xl rounded-lg hover:bg-blue-900 transition-all duration-300 ease-in hover:text-white bg-blue-700 mt-6 font-bold py-2 px-4"
//               >
//                 {isLoading ? "Sending..." : "Send"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </BackgroundBeamsWithCollision>
//     </>
//   );
// };

// export default Page;
