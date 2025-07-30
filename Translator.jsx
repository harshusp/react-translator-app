import React, { useState } from "react";
import axios from "axios";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("hi");

  const translateText = async () => {
    try {
      const response = await axios.post(
        "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        new URLSearchParams({ from: "en", to: language, text }),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "98076cb18emshe9cf5555de9b31fp1ef7f1jsn20344b1ea96d",
            "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
          },
        }
      );
      setTranslated(response.data.trans);
    } catch (err) {
      console.error(err);
      alert("Translation failed. Check API key or input.");
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Text Translator</h1>
      <textarea
        className="w-full p-2 border rounded"
        rows="4"
        placeholder="Enter text in English"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <label>Select Language: </label>
        <select
          className="border p-2"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>
      <button
        onClick={translateText}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Translate
      </button>
      {translated && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>Translated:</strong> {translated}
        </div>
      )}
    </div>
  );
}
