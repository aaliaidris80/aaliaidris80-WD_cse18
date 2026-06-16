import { use } from 'react';
import './App.css'
import Demo from './component/demo';
import Props from './component/props.jsx';
import Usestate from './component/usestate';
import useeffect from './component/useeffect';


function App () {
  return (
    <>
      <h1>Hello {name}</h1>
     <Demo/>
     <Props name="Vikas" rollno="23B1023008" course="Btech"/>
     <Usestate />
     <useeffect />
    </>
  )
}

export default App;