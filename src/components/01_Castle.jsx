import Tower from "./02_Tower";

export default function Castle({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-red-500 w-[90%]">
      <h1 className="mb-4 text-xl">Castle</h1>
      
      <p className="text-white text-sm mb-4">
        Message for Secret Room: {question ? `✅ ${question}` : "⏳ Waiting..."}
      </p>

      <p className="text-white text-sm mb-4">
        Reply from Secret Room: {answer ? `✅ ${answer}` : "⏳ Waiting..."}
      </p>

      <Tower 
      question={question} 
      answer={answer} 
      setAnswer={setAnswer}
      />
    </div>
  );
}
