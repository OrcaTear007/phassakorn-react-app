import Footer from "./components/Footer";
import header from "./components/Header";
import Header from "./components/Header";
import { myTermProj } from "./data/termProject";
import { useState } from "react";
export default function MyTermProject () {
    const [isTeam,setIsTeam]=useState (null);
    const myPage = "Phassakorn Term Project"
    const myName = "Phassakorn Makpun"
    const myStudID = "026730491005-7"
    const handleTeam = (isTeam:any)=>{
    setIsTeam(isTeam);
    }
    const tpSingle = myTermProj.filter (tpTmp =>{
        if(isTeam === null)
        return tpTmp.tpTerm === true || tpTmp.tpTerm === false
        else
        return tpTmp.tpTerm === isTeam 
    });
    //function handleCklick (){
    //   alert("คุณได้เลือกโปรเจค");
   // }
    const handleClick_b = (tpId:any,ind:any) =>{
       let myOut ="";
       let myObj =myTermProj[ind];
    
        myTermProj[ind]
        myOut+="[ข้อมูลโปรเจค]\n";
        myOut+="รหัส (Id):"+myObj.tpId+"\n";
        myOut+="รายวิชา (Subject):"+myObj.tpSubj+"\n";
        myOut+="ชื่อโปรเจค (NameProject) :"+myObj.tpDesc+"\n";
        myOut+="รูปภาพ (Images) :"+myObj.tpCover+"\n";
        myOut+="ลิงค์ผลงาน (Link):"+myObj.tpUrl+"\n";
        myOut+="ประเภทผลงาน(Team):"+myObj.tpTerm+"\n";
        myOut+="\n-- Thank you --";


        alert("คุณได้เลือกโปรเจค รหัส :"+tpId+"!");
    }

    const termProj = tpSingle.map((tpObj,index) =>
       <div className="grid grid-cols-5 mx-auto border-gray-300" key={index}>
           <div className="w-32 p-1">
        <img src={tpObj.tpCover} className="w-full rounded-full" title={tpObj.tpSubj +"(ID:"
        +tpObj.tpId+")"}/>
       </div>
      <div className="p-4 col-span-3 mb-auto">
       <h2 className="text-lg font-semibold text-gray-800">{tpObj.tpSubj}</h2>
       <p className="text-gray-600 text-sm mt-2">{tpObj.tpDesc}</p>
       <ItermTerm isTerm={tpObj.tpTerm} />
      </div>
     <div className="p-4 mb-auto">
      <a href="#" className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2"
      onClick={()=> handleClick(tpObj.tpId,index)}
      >View</a>
      
    </div>
  </div>
);
    return (
        <>
        <Header title ={myPage} />
        <p className="text-xl text-center ">
           Name : {myName} stud ID : {myStudID}<br/>--
        </p>
    <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 flex justify-center grid-cols-3 gap-2">
      
        <button type="button" className="w-50 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=> handleTeam (null)}>
            
            [A] All</button>
        <button type="button" className="w-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={()=> handleTeam (true)}>
            
            [T] Team</button>
        <button type="button" className="w-50 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"onClick={()=> handleTeam (false)}>
            
            [S] Single</button>
    </div> 

     <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300">
      {termProj}
     </div>
     <Footer title = "  © 2025 Phassakorn. 026730491005-7"/>
        </>
    );
}
 function ItermTerm ({isTerm}: {isTeam:any}) {
    if(isTerm)
     return(<p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    </p>);
     return(<p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </p>);
 }