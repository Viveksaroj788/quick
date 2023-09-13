import 'axios'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Dis1 from './helper/dis1';
import Dis2 from './helper/Dis2';
const Home = ()=> {
  const [Data,setData] = useState();
  const getreq = async ()=>{
    let  temp = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment")
    setData(temp.data)
  }
  useEffect(() => {
    getreq()
  }, [])
return (
    <div className="App">
        {Data?.users.map((User) => <Dis1 user={User} tickets={Data.tickets}/> )} 
        <hr/>
        {Data!==undefined?<Dis2 user={Data.user} tickets={Data.tickets}/>:<></>}
    </div>
  );
}

export default Home;

