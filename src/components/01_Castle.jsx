import Tower from "./02_Tower";

export default function Castle({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-red-500 w-[90%]">
      <h1 className="mb-4 text-xl">Castle</h1>
      {/* นำ Tower มาซ้อน และส่งข้อมูลต่อ */}
      <Tower question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}
