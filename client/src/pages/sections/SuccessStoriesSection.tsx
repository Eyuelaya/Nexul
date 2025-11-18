import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formFields = [
  {
    id: "pricing-option",
    label: "Pricing Option",
    placeholder: "Select pricing option",
    icon: "../figmaAssets/icon-26.svg",
    required: true,
  },
  {
    id: "desired-timeline",
    label: "Desired Timeline",
    placeholder: "Select timeline",
    icon: "../figmaAssets/icon-20.svg",
    required: true,
  },
];

export const SuccessStoriesSection = (): JSX.Element => {
  return (
    <section className="relative w-full border-t-[0.8px] border-solid border-neutral-800 py-[25px]">
      <div className="flex flex-col gap-6 w-full max-w-[718px]">
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" alt="Icon" src="/figmaAssets/icon-7.svg" />
          <h2 className="[font-family:'Arial-Regular',Helvetica] text-[#f9f9f9] text-base leading-6 font-normal tracking-[0]">
            Project Details
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="project-type"
            className="flex items-center gap-0.5 [font-family:'Arial-Regular',Helvetica] text-[#f9f9f9] text-sm leading-[14px] font-normal tracking-[0]"
          >
            Project Type
            <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#fa2b36] text-sm tracking-[0] leading-[14px]">
              *
            </span>
          </Label>
          <Select>
            <SelectTrigger
              id="project-type"
              className="h-9 bg-[#2626264c] rounded-lg border-[0.8px] border-solid border-neutral-800 px-3 [font-family:'Arial-Regular',Helvetica] font-normal text-[#a0a0a0] text-sm tracking-[0] leading-5"
            >
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="mobile">Mobile App</SelectItem>
              <SelectItem value="design">Design</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4">
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2 flex-1">
              <Label
                htmlFor={field.id}
                className="flex items-center gap-2 [font-family:'Arial-Regular',Helvetica] text-[#f9f9f9] text-sm leading-[14px] font-normal tracking-[0]"
              >
                <img className="w-4 h-4" alt="Icon" src={field.icon} />
                {field.label}
                {field.required && (
                  <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#fa2b36] text-sm tracking-[0] leading-[14px]">
                    *
                  </span>
                )}
              </Label>
              <Select>
                <SelectTrigger
                  id={field.id}
                  className="h-9 bg-[#2626264c] rounded-lg border-[0.8px] border-solid border-neutral-800 px-3 [font-family:'Arial-Regular',Helvetica] font-normal text-[#a0a0a0] text-sm tracking-[0] leading-5"
                >
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="project-description"
            className="flex items-center gap-0.5 [font-family:'Arial-Regular',Helvetica] text-[#f9f9f9] text-sm leading-[14px] font-normal tracking-[0]"
          >
            Project Description
            <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#fa2b36] text-sm tracking-[0] leading-[14px]">
              *
            </span>
          </Label>
          <Textarea
            id="project-description"
            placeholder="Please describe your project, including key features, target audience, and any specific requirements..."
            className="h-16 bg-[#2626264c] rounded-lg border-[0.8px] border-solid border-neutral-800 px-3 py-2 [font-family:'Arial-Regular',Helvetica] font-normal text-[#a0a0a0] text-sm tracking-[0] leading-5 resize-none"
          />
        </div>
      </div>
    </section>
  );
};
