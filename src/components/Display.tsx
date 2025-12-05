import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "./Profile";
import { Badge } from "@/components/ui/badge";
import { infoType } from "@/App";
import React from "react";

type formProps = {
  info:infoType;
  setInfo:React.Dispatch<React.SetStateAction<infoType>>
}


function Display({info , setInfo}:formProps) {
  return (
    <Card className="w-1/2 max-w-sm dark ">
      <CardHeader>
        <CardDescription className="bg-stone-900 text-center font-medium py-2 rounded">
         {info.fileName}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center gap-3 items-center">
        <Profile url={info.avatarUrl} fullName={info.fullName}/>
        <div>
          <CardTitle>{info.fullName}</CardTitle>
          <CardDescription className="mt-2 mb-4">{!info.registerDate ? "Today!" : `${info.registerDate} days ago`}</CardDescription>
          <div className="flex gap-2 flex-wrap">
            {info.skills.split(" ").map(( skill , index)=><Badge key={index} variant="secondary">{skill}</Badge>)}
          
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Display;
