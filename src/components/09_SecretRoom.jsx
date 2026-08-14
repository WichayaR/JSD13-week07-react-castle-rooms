export default function SecretRoom({ question, answer, setAnswer }) {
 
  return (
    <div className="flex flex-col justify-center items-center p-8 bg-gray-800 text-white rounded-md">
      <h1 className="text-2xl mb-4">SecretRoom</h1>
      
      {/* แสดงคำถามที่ส่งมาจาก App */}
      <p className="text-sm">Message from the outside: ✅ {question}</p>
      
      {/* กล่องให้พิมพ์ข้อความ ซึ่งจะไปอัปเดตค่า answer ใน App.jsx */}
      <textarea
        className="bg-white text-black mt-2 p-2 rounded w-full"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      
      {/* แสดงคำตอบ */}
      <p className="mt-4 text-sm text-green-400">Reply to the outside: ✅ {answer}</p>
    </div>
  );
}