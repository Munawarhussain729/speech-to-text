import "regenerator-runtime/runtime"
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();


  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
  }
  const stopListening = () => {
    SpeechRecognition.stopListening()
  }

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <>
      <h1>Speech to Text</h1>
      <div className='main-content'>
        {transcript}
      </div>
      <div>
        <button>Copy</button>
        <button onClick={startListening}>Start</button>
        <button onClick={stopListening}>Stop</button>
      </div>
    </>
  )
}

export default App
