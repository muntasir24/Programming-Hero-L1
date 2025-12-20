import React, { use, useEffect } from 'react';


import Cards from '../Cards/Cards';
import TaskCard from '../TaskCard/TaskCard';
import CompleteTask from '../CompleteTask/CompleteTask';

const BodySection = ({handleMark,allCards,CustomerPromise,setCardContainer,cardContainer,setCompleteCards,CompleteCards,handleComplete,setAllCards}) => {
    const customerData=use(CustomerPromise);
useEffect(()=>{
setAllCards(customerData);
},[customerData,setAllCards])
    // console.log(allCards);
    // console.log(typeof handleMark);
    return (
       
        <div className='w-11/12 mx-auto '>
              <h2 className='text-2xl font-bold pl-4'>Customer Tickets</h2>
            <div className=' grid grid-cols-12 p-2 gap-6 '>
            
            <div className='order-2 col-span-12 md:col-span-9 grid md:grid-cols-2 gap-4 p-2'>
                {
                     allCards.map((cd,index)=> <Cards handleMark={handleMark} key={index} cd={cd} cardContainer={cardContainer} setCardContainer={setCardContainer}></Cards>)
                        
                }
                
            </div>
            <div className='md:order-2 order-1 col-span-12 md:col-span-3  max-h-96 md:max-h-5/6 overflow-auto 
           '>

                <div className=' mb-6 shadow-lg rounded-xl  bg-white p-4'> 
                    <p className='text-xl font-semibold'>Task Status</p>
                    <p className={`text-center text-gray-500 p-2 ${cardContainer.length && "hidden"}`}>Select a ticket to add to Task Status</p>
                    {
                        cardContainer.map((card,index)=><TaskCard  key={index} card={card} CompleteCards={CompleteCards} setCompleteCards={setCompleteCards} handleComplete={handleComplete}></TaskCard>)
                    }
                   
                   {/* bg-[#B9F8CF] */}

     
                </div>
                <div  className=' shadow-lg rounded-xl p-4 bg-white'>
                    <p className='text-xl font-semibold'>Resolved Tasks</p>
                    <p className={`text-center text-gray-500 p-2 ${CompleteCards.length && "hidden"}`}>No resolved tasks yet.</p>
                    {
                        CompleteCards.map((c,index)=><CompleteTask key={index} complete={c}></CompleteTask>)
                    }
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default BodySection;