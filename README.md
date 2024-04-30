# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Error faced:
react-speech-recogni…n.js?v=9c45d98e:465 Uncaught ReferenceError: regeneratorRuntime is not defined
    at react-speech-recogni…s?v=9c45d98e:465:51
    at react-speech-recogni…s?v=9c45d98e:526:10
    at node_modules/react-speech-recognition/lib/RecognitionManager.js (react-speech-recogni…js?v=9c45d98e:632:6)
    at __require (chunk-Y2F7D3TJ.js?v=9c45d98e:3:50)
    at node_modules/react-speech-recognition/lib/SpeechRecognition.js (react-speech-recogni…s?v=9c45d98e:649:54)
    at __require (chunk-Y2F7D3TJ.js?v=9c45d98e:3:50)
    at node_modules/react-speech-recognition/lib/index.js (react-speech-recogni…?v=9c45d98e:1037:54)
    at __require (chunk-Y2F7D3TJ.js?v=9c45d98e:3:50)
    at react-speech-recogni…?v=9c45d98e:1080:16

### Error Solution:
- install regenerator-runtime: npm i --save regenerator-runtime 
- import it in yout app.js: import "regenerator-runtime/runtime"