
import "regenerator-runtime/runtime"
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from "react";
import useClipboard from "react-use-clipboard";

function App() {
  const [message, setMessage] = useState('')
  const [textToCopy, setTextToCopy] = useState('')
  const [isCopied, setCopied] = useClipboard(textToCopy);

  const commands = [
    {
      command: 'I would like to order *',
      callback: (food) => setMessage(`Your order is for: ${food}`)
    },
    {
      command: 'The weather is :condition today',
      callback: (condition) => setMessage(`Today, the weather is ${condition}`)
    },
    {
      command: 'My top sports are * and *',
      callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
    },
    {
      command: 'Pass the salt (please)',
      callback: () => setMessage('My pleasure')
    },
    {
      command: ['Hello', 'Hi'],
      callback: ({ command }) => setMessage(`Hi there!`),
      matchInterim: true
    },
    {
      command: 'reset',
      callback: ({ resetTranscript }) => {
        console.log('Resetting transcript...');
        resetTranscript();
      }
    }
  ]
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

  const handleCopy = () => {
    setCopied(!isCopied)
    setTextToCopy(transcript)
  }
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
      <p>Message is: {message}</p>
      <div className='main-content'>
        {transcript}
      </div>
      <div className="button-container">
        <button onClick={() => { handleCopy() }}>  Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}</button>
        <button onClick={startListening}>Start</button>
        <button onClick={stopListening}>Stop</button>
      </div>
    </>
  )
}

export default App
