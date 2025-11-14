import React, { useState } from "react";
import { generateSyntheticMedia } from "../api";

export default function SyntheticMedia() {
  const [script, setScript] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleGenerate = async () => {
    const data = await generateSyntheticMedia(script);
    setVideoUrl(data.video_url || data.error);
  };

  return (
    <div>
      <h2>AI Video Generator</h2>
      <textarea
        value={script}
        onChange={(e) => setScript(e.target.value)}
        placeholder="Enter the script text"
      />
      <button onClick={handleGenerate}>Generate Video</button>
      {videoUrl && (
        <div>
          <h3>Result:</h3>
          <video src={videoUrl} controls width="500" />
        </div>
      )}
    </div>
  );
}
