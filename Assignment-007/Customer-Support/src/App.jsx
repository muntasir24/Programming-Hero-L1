import Navbar from "./Component/Navbar/Navbar"
import Banner from "./Component/Banner/Banner"
import BodySection from "./Component/Main/BodySection"
import Footer from "./Component/Footer/Footer"
import { Suspense, useMemo, useState } from "react"
import { DiVim } from "react-icons/di"
import { ToastContainer, toast } from 'react-toastify';

const fetchCustomer=async()=>{
  const res=await fetch('/CustomerData.json');
  return res.json();
}

function App() {
 const CustomerPromise=useMemo(()=>fetchCustomer(),[]);
 const[cardContainer,setCardContainer]=useState([]);
 const[CompleteCards, setCompleteCards]=useState([]);
 const[allCards,setAllCards]=useState([]);
 
const handleComplete=(Completed)=>{
  const arr=cardContainer.filter(c=>c.id!=Completed.id);
  
  setCardContainer(arr);
  const arr2=[...CompleteCards,Completed];
  setCompleteCards(arr2);
  const arr3=allCards.filter(c=>c.id!=Completed.id);
  setAllCards(arr3);
  toast.success("Task Completed");
  
}
const handleMark=(c)=>{

const arr=[...cardContainer,c];
  setCardContainer(arr);
  console.log(cardContainer)
  toast(<p className="text-yellow-500 text-lg ">Task In Progress</p>
   
  );
}

// console.log(allCards);
// console.log(cardContainer.length && "ok");

  return (

  <>
  <Navbar></Navbar>
<Banner cardContainer={cardContainer} CompleteCards={CompleteCards}></Banner>
<Suspense fallback={<div className="flex items-center justify-center"><span className="loading loading-dots loading-xl"></span></div>}>
  <BodySection allCards={allCards} setAllCards={setAllCards} CustomerPromise={CustomerPromise} cardContainer={cardContainer} setCardContainer={setCardContainer} CompleteCards={CompleteCards} setCompleteCards={setCompleteCards} handleComplete={handleComplete}
  handleMark={handleMark}></BodySection></Suspense>
<Footer></Footer>
<ToastContainer/>
  </>
 
  )
}

export default App
