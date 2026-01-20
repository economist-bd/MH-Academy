import React, { useState } from 'react';

const BanglaTTS = () => {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (!text) return alert("দয়া করে কিছু লিখুন!");

    // ব্রাউজারের স্পিচ সিন্থেসিস ফিচার কল করা
    const utterance = new SpeechSynthesisUtterance(text);
    
    // সেটিংস
    utterance.lang = 'bn-BD'; // বাংলা ভাষা সেট করা
    utterance.pitch = 1; // গলার সুর (0-2)
    utterance.rate = 1;  // কথা বলার গতি (0.1-10)

    // কথা বলা শুরু হলে
    utterance.onstart = () => setIsSpeaking(true);
    // শেষ হলে
    utterance.onend = () => setIsSpeaking(false);

    // আগের কোনো কমান্ড থাকলে তা বাতিল করে নতুনটি চালু করবে
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800">বাংলা টেক্সট-টু-স্পিচ</h2>
      
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        placeholder="এখানে বাংলায় কিছু লিখুন..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleSpeak}
        disabled={isSpeaking}
        className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition duration-200 ${
          isSpeaking 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isSpeaking ? 'কথা বলছি...' : 'পড়ে শোনাও 🔊'}
      </button>
    </div>
  );
};

export default BanglaTTS;
