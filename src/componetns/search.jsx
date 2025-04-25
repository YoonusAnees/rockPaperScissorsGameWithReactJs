import React, {  useEffect } from 'react'
import { useState } from 'react'

export default function Search() {

    let fruits = [
        "apple",
        "banana",
        "orange",
        "grape",
        "kiwi",
        "mango",
        "pineapple",
        "strawberry",
        "watermelon",
        "peach",
        "pear",
        "cherry",
        "plum",
        "lemon",
        "lime",
        "coconut",
        "papaya",
        "blueberry",
        "raspberry",
        "blackberry",
        "apricot"
      ];
    

    const [search, setSearch] = useState(fruits);
    const [searchParams , setSearchParams] = useState("");

    useEffect(()=>{
        if (searchParams===""){
            setSearch(fruits);
        }
        else{
            handleFiler();
        }
    },[searchParams]);

    const handleFiler = ()=>{
        const filterDetail = search.filter((fruit)=>{
            return fruit.toLocaleLowerCase().includes(searchParams.toLowerCase());
        });
        setSearch(filterDetail);
    }

    




  return (
    <div>
        <input type="text" placeholder='Search' value={searchParams} onChange={(e)=>setSearchParams(e.target.value)} />
        <ul>
        {search.map((fruit)=>(
            <li>{fruit}</li>
        ))}
       
        </ul>
    </div>
  )
}
