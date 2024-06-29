import  { useEffect, useState } from 'react';
import { YOUTUBEAPI } from '../utils/constants';

const GetCardVedios = () => {
    const [vedios , setVedios] = useState([]);
    useEffect(() =>{
      getVedios()
    },[])
    const getVedios = async () =>{
      const data = await fetch(YOUTUBEAPI)
      const json = await data.json();
      // console.log(json.items[0]);
      setVedios(json.items)
      } 
      return vedios;
}
    
export default GetCardVedios;
