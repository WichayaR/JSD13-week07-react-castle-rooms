import Corridor from "./06_Corridor";

export default function Hall({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-teal-500 w-[90%] text-black">
      <h1 className="mb-4 text-xl">Hall</h1>
      
      <p className="text-white text-sm mb-4">
        Message for Secret Room: {question ? `✅ ${question}` : "⏳ Waiting..."}
      </p>

      <p className="text-white text-sm mb-4">
        Reply from Secret Room: {answer ? `✅ ${answer}` : "⏳ Waiting..."}
      </p>
      
      <Corridor 
      question={question} 
      answer={answer} 
      setAnswer={setAnswer}
      />
    </div>
  );
}