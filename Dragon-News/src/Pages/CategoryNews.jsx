import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/HomeLayout/NewsCard';

const CategoryNews = () => {
    const {id:cat}=useParams();
    const data=useLoaderData();
    const [categoryNews,setCategoryNews]=useState([]);
    // console.log(data);
    // console.log(Number(cat)); 
   useEffect(()=>{
if(cat==0){
    setCategoryNews(data);
    return;
}
if(cat==1){
const filteredNews=data.filter(d=>d?.others?.is_today_pick==true);
setCategoryNews(filteredNews);
}
else  {const filteredNews=data.filter(d=>d.category_id===Number(cat));
setCategoryNews(filteredNews);
}
}
   ,[data,cat])

    return (
        <div>
            {/* <p>cate {categoryNews.length}</p> */}

            <div className='grid grid-cols-1 gap-5 max-w-[90%] mx-auto'>
                {
                    categoryNews.map((news,nid)=><NewsCard key={nid} news={news}></NewsCard>)
                }

            </div>
        </div>
    );
};

export default CategoryNews;