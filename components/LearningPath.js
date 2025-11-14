import React, { useState } from "react";
import { generateLearningPath } from "../api";

export default function LearningPath() {
  const [profile, setProfile] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const data = await generateLearningPath({ profile });
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h2>AI Learning Path Generator</h2>
      <textarea
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
        placeholder="Enter your profile or goals"
      />
      <button onClick={handleSubmit}>Generate Path</button>
      <pre>{result}</pre>
    </div>
  );
}
