import axios from 'axios'
import { useState } from 'react'


function App() {


  const timesubmit = () => {
    axios.post('http://localhost:4000/post',{
      id:'baek'
    })
  }

  const gettime = () => {
    axios.get('http://localhost:4000/get')
    .then(res=>{
      console.log(res.data)
    })
  }

  return (
  <div>
    <button onClick={timesubmit}>
      날짜전송하기
    </button>
    <button onClick={gettime}>
      날짜가져오기
    </button>
  </div>
    )
}

export default App;
