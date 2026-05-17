
import './App.css'
import ToDo from './Todo';
import Actor from './actor'

function App() {
      const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah', 'jamal', 'kuddus khan'];
     // const time = 50;
  return (
     <>
       <h1>React Core Concept</h1>

      {
        actors.map(actor =>
           <Actor key={actor} actor={actor}></Actor>
       )
      }
       {/* <ToDo
       task="Learn React"
        isDone={true} 
        time={time}></ToDo>
       <ToDo 
       task="Revise JS" 
       isDone={false}>
       </ToDo>
       <ToDo 
       task="Take a shower" 
       isDone={true}
       time=""></ToDo> */}
      
       {/* <h2>React Core Concept</h2>
       <Person></Person>
       <Sports></Sports>
       <Person></Person>
       <Sports></Sports>
       <Pet></Pet>
       <Student></Student>
       <Developer name="kuddus" tech="JS"></Developer>
       <Developer name="paglu" tech="React"></Developer>
       <Developer name="chaglu" tech="Python"></Developer>
       <Player name="Pat Cummins" runs=" 1,567"></Player>
       <Player name="Harry Kane" goals="500"></Player>
       <FootballPlayers name="messi" age="38"  goals="472"></FootballPlayers>
       <Salami event="Eid-ul-Adha" amount="1"></Salami>
       <Salami event="Graduation"></Salami> */}

     </>
      
  )
}

function Pet(){
    return(
        <p>Cat</p>
    )
}

 function Person(){
    const age = 17;
    const name = 'JK';

    const personStyle = {
        color: 'purple',
        textAlign: 'right',
        fontSize: '4px'
    }
      return (
         <p style={personStyle}>I am a person: {name} {age}</p>
      )
 }

 function Sports (){
      return(
           <div>

            <h2>Sports</h2>

               <p> Playing and losing </p>
           </div>
      )
 }

 //destructuring way
 function Player({name, runs, goals}){
    return(
          <div className='student'>
               <h3>Name: {name}</h3>
               <p>Runs: {runs}</p>
               <p>Goals: {goals}</p>
          </div>
    )
 }


 function FootballPlayers({name, age, goals}){
      return(
          <div className='student'>
             <h3>Name: {name}</h3>
             <p>Age: {age}</p>
             <p>Goals: {goals}</p>
          </div>
      )
 }


 function Salami({event, amount = 0}){
      return(
         <div className='student'>
              
              <p>Salami For: {event}</p>
              <p>Amount: {amount}</p>
         </div>
      )
 }
//  const {name, tech} = {name: 'paglu', tech: 'React'}

 function Student(){
      return(
          <div className='student'>
              <p>Name: </p>
              <p>Dept: </p>
          </div>
      )
 }

 function Developer(props){
    console.log(props);
      return(
         <div style={{
              border: '2px solid green',
              borderRadius: '25px',
              margin: '2px'
         }}>
            <h2>Developer: {props.name} </h2>
            <p>Technology: {props.tech}</p>
         </div>
      )
 }

 
export default App
