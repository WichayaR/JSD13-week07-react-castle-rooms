import SecretRoom from "./09_SecretRoom";

export default function Nook({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-violet-500 w-[90%] text-black">
      <h1 className="mb-4 text-xl">Nook</h1>
      
      <p className="text-white text-sm mb-4">
        Message for Secret Room: {question ? `✅ ${question}` : "⏳ Waiting..."}
      </p>

      <p className="text-white text-sm mb-4">
        Reply from Secret Room: {answer ? `✅ ${answer}` : "⏳ Waiting..."}
      </p>
      
      {/* นำ SecretRoom มาซ้อน และส่ง props ต่อ */}
      <SecretRoom 
      question={question} 
      answer={answer} 
      setAnswer={setAnswer}
      />
    </div>
  );
}