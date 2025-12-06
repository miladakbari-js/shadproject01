"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { infoType } from "@/App";

type FormProps = {
  info: infoType;
  setInfo: React.Dispatch<React.SetStateAction<infoType>>;
};

export function DatePicker({ info, setInfo }: FormProps) {
  const [date, setDate] = React.useState<Date>();

  React.useEffect(() => {
    if (!date) return;
    const today = new Date();
    const diffMs = today.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if(diffDays<0){
      return alert("You can't choose the days ahead! ! ! ")
    }

    setInfo({
      ...info,
      registerDate: diffDays,
    });
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className=" data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Register date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 bg-stone-200 
    [&_.rdp-day]:text-stone-100
    [&_.rdp-day_today]:text-stone-100
    [&_.rdp-day_selected]:bg-stone-600
    [&_.rdp-day_selected]:text-white 
    [&_.rdp-day]:mr-0.5
    [&_.rdp-nav_button]:bg-stone-100 
    [&_.rdp-nav_button]:text-white
   "
      >
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}
