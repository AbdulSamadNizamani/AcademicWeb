"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Navbar from "@/components/Navbar";
import { handleFormSubmission } from "../../../lib/resend";

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="label-input-container">{children}</div>
);

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateInput = (name: string, value: string) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        if (!/^[a-zA-Z\s]{2,50}$/.test(value)) {
          errorMessage = "Name must contain only letters and be 2-50 characters long.";
        }
        break;
      case "email":
        if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          errorMessage = "Invalid email address.";
        }
        break;
      case "phone":
        if (!/^\+?\d{10,15}$/.test(value)) {
          errorMessage =
            "Phone number must contain only digits and be 10-15 characters long.";
        }
        break;
      case "course":
        if (!/^[a-zA-Z0-9\s]{2,50}$/.test(value)) {
          errorMessage = "Course must be 2-50 characters long and contain no special characters.";
        }
        break;
      default:
        break;
    }

    return errorMessage;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const error = validateInput(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const hasErrors = Object.values(errors).some((error) => error);
    const hasEmptyFields = Object.values(formData).some((value) => !value);

    if (hasErrors || hasEmptyFields) {
      alert("Please fix the errors and fill all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const result = await handleFormSubmission(formData);
      if (result.success) {
        alert("Email Sent Successfully! You will be replied to in a few hours!");
        setFormData({ name: "", email: "", phone: "", course: "" });
      } else {
        alert(`Failed to Send Email: ${result.error}`);
      }
    } catch (error) {
      console.error("Error Submitting Form:", error);
      alert("An Error Occurred. Please Try Again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contact = [
    {
      name: "name",
      value: `${formData.name}`,
      error: errors.name,
      title: "First Name",
      placeholder: "Enter your Name",
      type: "text",
    },
    {
      name: "email",
      value: `${formData.email}`,
      error: errors.email,
      title: "Email Address",
      placeholder: "Enter your Email Address",
      type: "email",
    },
    {
      name: "phone",
      value: `${formData.phone}`,
      error: errors.phone,
      title: "Phone",
      placeholder: "Enter your Phone Number",
      type: "tel",
    },
    {
      name: "course",
      value: `${formData.course}`,
      error: errors.course,
      title: "Joining Course",
      placeholder: "Enter your Course",
      type: "text",
    },
  ];

  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        <Navbar />
      </div>
      <BackgroundBeamsWithCollision className="pt-6 md:pt-0 h-full">
        <div className="md:pt-28 sm:pt-32 pt-36 flex justify-center items-center flex-col">
          <form className="my-8 w-64 sm:w-80" onSubmit={handleSubmit}>
            <LabelInputContainer>
              {contact.map((field, index) => (
                <div key={index} className="flex flex-col gap-1 md:mb-2">
                  <Label
                    htmlFor={field.name}
                    className="md:text-xl sm:text-lg text-base"
                  >
                    {field.title}
                  </Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="sm:w-80 md:text-base text-sm"
                  />
                  {field.error && (
                    <span className="text-red-500 text-sm">{field.error}</span>
                  )}
                </div>
              ))}
              <button
                disabled={isLoading}
                type="submit"
                aria-busy={isLoading}
                className="text-xl rounded-lg hover:bg-blue-900 transition-all duration-300 ease-in hover:text-white bg-blue-700 mt-6 font-bold py-2 px-4"
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </LabelInputContainer>
          </form>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default Page;
