'use client';
import {useState, useEffect} from "react";
import Hello from "@/components/hello";

export default function Page(){
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(()=>{
        setCalculation(count * 2);
    }, [count]);
    return(
        <>
            {/*<button className={'button mx-5 bg-orange-200'} onClick={()=>setEstAfficher(!estAfficher)}>afficher ou cacher le text</button>*/}
            {/*{estAfficher && <Hello prenom={"adnane"}/>}*/}


            <h1>count: {count}</h1>
            <h1>calculation: {calculation}</h1>
            <button type={"button"} onClick={() => setCount(count + 1)}>
                Increment
            </button>
            {"  "}
            <button type={"button"} onClick={() => setCount(0)}>
                 Reset
            </button>

            {/*<input type="text" className={'border-1'} onChange={(e) => setText(e.target.value)} />*/}
            {/*<Hello prenom={text}/>*/}

        </>
    )
}