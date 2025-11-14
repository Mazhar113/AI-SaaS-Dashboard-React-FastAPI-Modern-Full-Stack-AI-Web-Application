import React,{useState} from 'react';
import axios from 'axios';
export default function TimeCrystal(){
const [query,setQuery]=useState(''); const [result,setResult]=useState('');
const handleQuery=async()=>{const res=await axios.post('http://localhost:8000/query-time-crystal/',{query}); setResult(res.data.result);}
return (<div className='bg-white dark:bg-gray-800 p-5 rounded shadow'><h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-3'>Time Crystal</h3><input value={query} onChange={e=>setQuery(e.target.value)} placeholder='Ask a question' className='w-full p-2 mb-3 rounded border'/><button onClick={handleQuery} className='px-3 py-1 bg-yellow-500 text-white rounded'>Query</button>{result&&<p className='mt-3 text-gray-700 dark:text-gray-300'>{result}</p>}</div>);
}
