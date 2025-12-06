import { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";

export type infoType ={
  fullName: string;
  skills: string;
  registerDate: number;
  avatarUrl: string | null;
  fileName: string;

}

const infoObj = {
  fullName: "Milad Akbari",
  skills: "HTML CSS JavaScript",
  registerDate: 0,
  avatarUrl: null,
  fileName: "My Resume",
};
function App() {
  const [info, setInfo] = useState<infoType>(infoObj);

  return (
    <main className="bg-stone-950 flex justify-center items-center h-screen w-screen text-stone-200 gap-4">
      <Form info={info} setInfo={setInfo} />
      <Display info={info} setInfo={setInfo}/>
    </main>
  );
}

export default App;
