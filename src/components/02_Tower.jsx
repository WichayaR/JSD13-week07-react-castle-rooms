import Chamber from "./03_Chamber";

export default function Tower({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-orange-500 w-[90%]">
      <h1 className="mb-4 text-xl">Tower</h1>
      
      <p className="text-white text-sm mb-4">
        Message for Secret Room: {question ? `✅ ${question}` : "⏳ Waiting..."}
      </p>
      
      <p className="text-white text-sm mb-4">
        Reply from Secret Room: {answer ? `✅ ${answer}` : "⏳ Waiting..."}
      </p>

      {/* นำ Chamber มาซ้อน และส่ง props ต่อ */}
      <Chamber 
      question={question} 
      answer={answer} 
      setAnswer={setAnswer}
      />
    </div>
  );
}