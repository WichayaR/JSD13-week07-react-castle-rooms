import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  const [question, setQuestion] = useState("hello?");
  const [answer, setAnswer] = useState("hey help me!");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      {/* ส่งข้อมูลลงไปใน Castle */}
      <Castle question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}