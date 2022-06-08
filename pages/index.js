import Head from 'next/head'
import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'

export default function Home() {

  const [setNo, setSetNo] = useState("A");

  const elements = {
    'A': <pre>
      AA ka lawda <br></br>
      A ka lawda
    </pre>,
    'B': "B ka lawda"
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SQL Solutions</title>
      </Head>

    <div className='h-screen w-screen bg-amber-300'>
      <div className='flex justify-center items-center p-8 h-1/5 w-screen'>
        <button className='mr-16 h-10 w-16 bg-indigo-500 text-white rounded-lg' onClick={()=>setSetNo("A")}>Set A</button>
        <button className='h-10 w-16 bg-indigo-500 text-white rounded-lg' onClick={()=>setSetNo("B")}>Set B</button>
      </div>
      <div className='h-4/5 w-screen p-8'>
        <div className='bg-slate-500 h-full w-full p-8 text-slate-300'>
          <pre>{elements[setNo]}</pre>
        </div>
      </div>
    </div>
    </div>
  )
}
