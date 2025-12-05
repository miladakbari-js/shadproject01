import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "./DatePicker";

function Form() {
  return (
    <Card className="w-1/2 max-w-lg dark">
      <CardHeader>
        <CardTitle>Resume Creator</CardTitle>
        <CardDescription>Export Your snap-shot in oneClick</CardDescription>
        <CardAction></CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" placeholder="enter your fullName" />
            </div>
          </div>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skills">Skills</Label>
              <Input id="skills" placeholder="put your skills" />
            </div>
          </div>

          <div className="flex flex-col space-y-1.5">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="avatar">Avatar</Label>
              <Input id="avatar" type="file" />
            </div>
          </div>


           <div className="flex flex-col space-y-1.5">
            <Label htmlFor="datepicker">Register Date</Label>
            <DatePicker />
           </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-blend-color-burn">Reset</Button>
        <Button>Export</Button>
      </CardFooter>
    </Card>
  );
}
export default Form;
