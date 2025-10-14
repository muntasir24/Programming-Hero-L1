
import { SlCalender } from "react-icons/sl";

const Cards = ({cd,cardContainer,handleMark}) => {
const{priority}=cd;

console.log(cd.id);

let val=cardContainer.find(obj=>obj.id==cd.id);



    return (
       <div onClick={()=>{handleMark(cd)}}  className={`shadow-sm bg-white space-y-3 rounded-2xl p-5 ${val && 'pointer-events-none'} cursor-pointer`}>
                   <div className='flex justify-between items-center'> 
                    <h2 className='font-semibold'>{cd.title}</h2>
                   <div className={` ${val ?"bg-[#F8F3B9]" : "bg-[#B9F8CF]"} flex gap-1 p-2 rounded-4xl items-center`}> <div className={`w-3 h-3 rounded-full ${val? "bg-[#FEBB0C]": "bg-[#02A53B]"}`}></div> <p className={`${val ? "text-[#9C7700]" : "text-[#0B5E06]"}  `}>{val ? "IN-PROGRESS" : "OPEN"}</p></div>
                   </div>
                    <p className='text-gray-500'>{cd.description}</p>

                    <div className='flex flex-col md:flex-row justify-between'>
                      <div className='flex gap-2 justify-between'>
                        <p className='text-gray-500'>#{cd.id}</p> 
                        <p className={priority=="HIGH"? 'text-[#F83044]' :priority=="MEDIUM" ? 'text-[#FEBB0C]' :'text-[#02A53B]' }>{priority} PRIORITY</p>
                        </div> 
                        <div className='flex gap-2 items-center '>
                      <p className='text-gray-500'>{cd.customer}</p>
                      <SlCalender className='text-gray-500 ml-15 md:ml-0'/>
                        <p className='text-gray-500'>{cd.createdAt}</p>
                        </div>
                    </div>
                <div>

                </div>
                </div>
    );
};

export default Cards;