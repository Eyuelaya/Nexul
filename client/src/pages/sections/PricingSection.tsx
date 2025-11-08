import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formFields = [
  {
    row: 0,
    fields: [
      {
        label: "Full Name",
        required: true,
        placeholder: "John Doe",
        icon: null,
        name: "fullName",
      },
      {
        label: "Email Address",
        required: true,
        placeholder: "john@example.com",
        icon: "/figmaAssets/icon-6.svg",
        name: "email",
      },
    ],
  },
  {
    row: 1,
    fields: [
      {
        label: "Company Name",
        required: false,
        placeholder: "Acme Inc.",
        icon: "/figmaAssets/icon-9.svg",
        name: "company",
      },
      {
        label: "Phone Number",
        required: false,
        placeholder: "+1 (555) 000-0000",
        icon: "/figmaAssets/icon-32.svg",
        name: "phone",
      },
    ],
  },
];

export const PricingSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  return (
    <section className="flex flex-col items-start gap-4 w-full">
      <header className="flex items-center gap-2 w-full">
        <img
          className="w-5 h-5"
          alt="Contact Information Icon"
          src="/figmaAssets/icon-31.svg"
        />
        <h2 className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#f9f9f9] text-base tracking-[0] leading-6">
          Contact Information
        </h2>
      </header>

      <div className="flex flex-col gap-4 w-full">
        {formFields.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" // Added responsive grid
          >
            {row.fields.map((field, fieldIndex) => (
              <div
                key={`field-${rowIndex}-${fieldIndex}`}
                className="flex flex-col gap-2"
              >
                <Label 
                  htmlFor={field.name} // Added htmlFor for accessibility
                  className="flex items-center gap-0.5 [font-family:'Arial-Regular',Helvetica] font-normal text-[#f9f9f9] text-sm tracking-[0] leading-[14px]"
                >
                  {field.label}
                  {field.required && (
                    <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#fa2b36] text-sm tracking-[0] leading-[14px]">
                      *
                    </span>
                  )}
                </Label>
                <div className="relative">
                  <Input
                    id={field.name} // Added id for accessibility
                    value={formData[field.name as keyof typeof formData]} // Controlled value
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    placeholder={field.placeholder} // Use placeholder instead of defaultValue
                    className={`h-9 bg-[#2626264c] rounded-lg border-[0.8px] border-solid border-neutral-800 [font-family:'Arial-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] transition-colors focus:border-neutral-400 ${
                      field.icon ? "pl-10" : "pl-3"
                    } pr-3 py-1`}
                  />
                  {field.icon && (
                    <img
                      className="absolute top-2.5 left-3 w-4 h-4 pointer-events-none"
                      alt={`${field.label} icon`}
                      src={field.icon}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};