import React,{useState} from 'react';
import axios from 'axios';
export default function LifeCoach(){
const [question,setQuestion]=useState(''); const [result,setResult]=useState('');
const handleSubmit=async()=>{const res=await axios.post('http://localhost:8000/simulate-decision/',{question}); setResult(res.data.simulation);}
return (<div className='bg-white dark:bg-gray-800 p-5 rounded shadow'><h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-3'>Life Coach</h3><input value={question} onChange={e=>setQuestion(e.target.value)} placeholder='Enter decision' className='w-full p-2 mb-3 rounded border'/><button onClick={handleSubmit} className='px-3 py-1 bg-green-500 text-white rounded'>Simulate</button>{result&&<p className='mt-3 text-gray-700 dark:text-gray-300'>{result}</p>}</div>);
}
