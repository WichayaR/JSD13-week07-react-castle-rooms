import Hall from "./05_Hall";

export default function Room({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-green-500 w-[90%] text-black">
      <h1 className="mb-4 text-xl">Room</h1>
      
      {/* นำ Hall มาซ้อน และส่ง props ต่อ */}
      <Hall question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}