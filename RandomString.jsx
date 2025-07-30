import React, { useState, useCallback, useEffect } from "react";

export default function RandomString() {
  const [randomStr, setRandomStr] = useState("");

  const generateRandomString = useCallback(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < 10; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomStr(str);
  }, []);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Random String Generator</h1>
      <div className="p-4 bg-gray-100 rounded">{randomStr}</div>
      <button
        onClick={generateRandomString}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Generate New
      </button>
    </div>
  );
}
