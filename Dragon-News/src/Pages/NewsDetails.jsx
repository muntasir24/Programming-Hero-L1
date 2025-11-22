import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../Components/Header';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import RightAside from '../Components/HomeLayout/RightAside';

const NewsDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const [news,setNews]=useState({});
    // console.log(news,id);
useEffect(()=>{
    const signleNews=data.find(n=>n.id==id);
setNews(signleNews);
},[data,id]);


// console.log(news);

    return (
        <div>
           <header>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto py-5 grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;