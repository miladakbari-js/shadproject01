import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  return (
    <main className="bg-stone-950 flex justify-center items-center h-screen w-screen text-stone-200 gap-4">
      <Form />
      <Display />
    </main>
  );
}

export default App;
