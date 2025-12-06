import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type profileProps = {
  fullName: string;
  url: string | null;
};
export function Profile({ url, fullName }: profileProps) {
  const [f, l] = fullName.split(" ").map((i) => i[0]);

  return (
    <Avatar className="w-32 h-32">
      <AvatarImage src={url} />
      <AvatarFallback>{f + l}</AvatarFallback>
    </Avatar>
  );
}
