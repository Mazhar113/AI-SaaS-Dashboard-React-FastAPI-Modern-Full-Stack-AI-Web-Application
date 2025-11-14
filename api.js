import axios from "axios";

const API_BASE = "http://127.0.0.1:8000"; // Your backend URL

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export const generateLearningPath = async (userProfile) => {
  const response = await api.post("/learning-path", userProfile);
  return response.data;
};

export const getLifeCoachAdvice = async (question) => {
  const response = await api.post("/life-coach", { question });
  return response.data;
};

export const generateSyntheticMedia = async (script) => {
  const response = await api.post("/synthetic-media", { script });
  return response.data;
};

export const getTimeCrystalEmbedding = async (text) => {
  const response = await api.post("/time-crystal", { text });
  return response.data;
};
