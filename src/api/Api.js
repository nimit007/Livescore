
const API_KEY = "ROSJqUywmMb4vTB0cAVX0PcAEi43";

export const getMatches= ()=>{

   const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

   return fetch(url)
   .then((response)=>response.json())
   .catch( (error)=>console.log("error: ",error) );
}

export const getMatchDetail = (id)=>{

   const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

   return fetch(url)
   .then((response)=>response.json())
   .catch( (error)=>console.log("error: ",error) );
}