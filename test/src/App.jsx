import React from "react";

const ChatBotDemo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white text-center py-3 text-lg font-semibold">
          💬 HealthBot
        </div>

        {/* Chat Area */}
        <div className="p-5 space-y-4 h-80 overflow-y-auto">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-none max-w-xs">
              Why I'm feeling dizzy?
            </div>
          </div>

          {/* Bot response */}
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-none max-w-xs">
              You take <span className="font-semibold">Coralcal DX</span> — it has a side effect of
              nausea. Don’t worry, take rest. 🩺
            </div>
          </div>
        </div>

        {/* Input Box (non-functional demo) */}
        <div className="border-t p-3 flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded-xl px-3 py-2 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-4 py-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotDemo;
