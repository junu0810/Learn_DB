import axios from 'axios'
import { useState } from 'react'


function App() {
const [date, setDate] = useState()

  const timesubmit = () => {
    axios.post('http://localhost:4000/post',{
      id:'joon'
    })
  }

  const gettime = () => {
    axios.get('http://localhost:4000/get')
    .then(res=>{
      console.log(res.data.type)
      setDate(res.data.type)
    })
  }

  const updatetime = () => {
    axios.post('http://localhost:4000/update',{
      id:'joon'
    })
  }

  const deletetime = () => {
    axios.delete('http://localhost:4000/delete',{
      id: 'joon'
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
    <button onClick={updatetime}>
      날짜업데이트하기
    </button>
    <button onClick={deletetime}>
      날짜 삭제하기
    </button>
    <div>
      {date ? date : '날짜를 가져오세요'}
    </div>
  </div>
    )
}

export default App;
