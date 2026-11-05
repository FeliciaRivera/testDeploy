import React from 'react'
import ReactDOM from 'react-dom/client'
import TambahKurang from './tambah_kurang.jsx'
import InputQuiz from './input_quiz.jsx'

const garis = { border: 'none', borderTop: '2px solid #555', margin: '4px 0' }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ width: '480px' }}>
      <TambahKurang/>
      <hr style={garis}/>
      <hr style={garis}/>
    </div>
    <div style={{ marginLeft: '20px' }}>
      <InputQuiz/>
    </div>
  </React.StrictMode>,
)