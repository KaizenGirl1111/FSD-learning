import './App.css'
import DisplayCard from './Component/DisplayCard'

function App() {
  return (
<>
          {/*React 1st way,most used*/}
<div className="App">
  <DisplayCard/>
             
          </div>
</>
  )
}

export default App
//just a html like syntax in jsx 
 /* when js want to use in html use flower braces */
 //we use functional component
 //export file so in other place u can import it
 //function functionname(){return (<></>)}
 //import functionname from './path'
 //create files starting with capital letter
 //not able to use args/params
 //named export - with flower braces and import
 //we write minimal code in app.jsx because it is rendering