// console.log("akhilesh reddy")
import logo from './logo.svg'
import logo from './App.css'
import React,{useEffect,useState} from 'react';

function News(){
    let {value,setvalue}=useState("DJ");
    async function newdj(){
        let response= await fetch("https://newsapi.org/v2/everything?q=tesla&apiKey=3a97049936a84a37a75783386b27e94e");
        let result=await response.json();
         
        console.log(result);
        console.log(result.articles);
      let p= result.articles.map((a)=>{return <img src={a.urlToImage}/>})
       
      console.log(p);
    }
    return <h1>unhappy</h1>;
}   
export default News;  