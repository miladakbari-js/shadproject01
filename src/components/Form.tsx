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
import { infoType } from "@/App";

type FormProps = {
  info: infoType;
  setInfo: React.Dispatch<React.SetStateAction<infoType>>;
};

function Form({ info, setInfo }: FormProps) {
  const avatarHandler = ({ target }) => {
    const file = target.files[0];
    const url = URL.createObjectURL(file);
    setInfo({
      ...info,
      avatarUrl: url,
    });
  };

  const resetHandler = () => {
    setInfo({
      ...info,
      fullName: "",
      skills: "",
      registerDate: 0,
      avatarUrl: null,
      fileName: "My Resume",
    });
  };
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
              <Input
                id="fullname"
                placeholder="Enter Your FullName"
                value={info.fullName}
                onChange={(e) => setInfo({ ...info, fullName: e.target.value })}
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                placeholder="put Your Skills"
                value={info.skills}
                onChange={(e) => setInfo({ ...info, skills: e.target.value })}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1.5">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="avatar">Avatar</Label>
              <Input id="avatar" type="file" onChange={avatarHandler} />
            </div>
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="datepicker">Register Date</Label>
            <DatePicker info={info} setInfo={setInfo} />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          className="bg-blend-color-burn text-white"
          onClick={resetHandler}
        >
          Reset
        </Button>
        <Button className="text-white">Export</Button>
      </CardFooter>
    </Card>
  );
}
export default Form;
