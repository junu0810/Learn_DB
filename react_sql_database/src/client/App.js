  import axios from 'axios';
import react, { useState } from 'react'

  
  
function App() {
  const [text,settext] = useState('')
  const [member,nowmember] = useState('김아무개')
  const [money,loadmoney] = useState(10000)


  function onchange (e) {
    settext(e.target.value)
  }

  function changename(name){
    console.log(text)
    axios.get('http://localhost:3001/name',
    {
      body: text
    },
    {
      headers:{

      credentials:true,
      accept: 'application/json'
      
      }
    })
  .then(res => console.log(res))
  
}




  return (
      <div>
        <div>
          안녕하세요. 회원 ID를 입력해주세요
          <div class="input">
            <br/>
            <input type='text' onChange={onchange} ></input>
            <button onClick={(name)=>changename(name)}>입력</button>
          </div>
          <div>
            <br/>
            <span>{member} 회원님 반갑습니다.</span>
            <li>남은 잔고는 {money} 입니다.</li>
          </div>
        </div>
      </div>
    );
  }

  export default App;
