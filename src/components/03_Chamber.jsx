import Room from "./04_Room";

export default function Chamber({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-yellow-500 w-[90%] text-black">
      <h1 className="mb-4 text-xl">Chamber</h1>
      
      <p className="text-white text-sm mb-4">
        Message for Secret Room: {question ? `✅ ${question}` : "⏳ Waiting..."}
      </p>

      <p className="text-white text-sm mb-4">
        Reply from Secret Room: {answer ? `✅ ${answer}` : "⏳ Waiting..."}
      </p>

      {/* นำ Room มาซ้อน และส่ง props ต่อ */}
      <Room 
      question={question} 
      answer={answer} 
      setAnswer={setAnswer}
      />
    </div>
  );
}