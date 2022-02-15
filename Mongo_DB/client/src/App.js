import axios from 'axios'


function App() {
  const timesubmit = () => {
    console.log('날짜전송')
    axios.post('http://localhost:4000/post')
  }

  return (
  <div>
    <button onClick={timesubmit}>
      날짜전송하기
    </button>
  </div>
    )
}

export default App;
