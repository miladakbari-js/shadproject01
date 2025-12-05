import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile } from "./Profile";
import { Badge } from "@/components/ui/badge";


function Display() {
  return (
    <Card className="w-1/2 max-w-sm dark ">
      <CardHeader>
        <CardDescription className="bg-stone-900 text-center font-medium py-2 rounded">
          milad milad
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center gap-3 items-center">
        <Profile/>
        <div>
          <CardTitle>Milad Akbari</CardTitle>
          <CardDescription className="mt-2 mb-4">11 Days ago</CardDescription>
          <div className="flex gap-2 flex-wrap">
           <Badge variant="secondary">HTML</Badge>
           <Badge variant="secondary">CSS</Badge>
           <Badge variant="secondary">JavaScript</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Display;
