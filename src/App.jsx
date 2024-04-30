
import "regenerator-runtime/runtime"
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from "react";

function App() {
  const [message, setMessage] = useState('')
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
      callback: ({ command }) => setMessage(`Hi there! You said: "${command}"`),
      matchInterim: true
    },
    {
      command: 'Beijing',
      callback: (command, spokenPhrase, similarityRatio) => setMessage(`${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2
    },
    {
      command: ['eat', 'sleep', 'leave'],
      callback: (command) => setMessage(`Best matching command: ${command}`),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript()
    }
  ]
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

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
        <button>Copy to clipboard</button>
        <button onClick={startListening}>Start</button>
        <button onClick={stopListening}>Stop</button>
      </div>
    </>
  )
}

export default App
