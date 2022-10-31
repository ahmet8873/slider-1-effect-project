
import './App.css';
import{FiChevronRight,FiChevronLeft} from 'react-icons/fi'
import {FaQuoteRight }from 'react-icons/fa'
import data from './data'
import {useState} from 'react'

function App() {

 const[people,setPeople]=useState(data)
const[index,setIndex]=useState(0)
  return (
    <section className='container'>
      
      <div className="title">
        <h2>
          <span className='span'>/</span> Revievs
        </h2>
      </div>
      
      <div className="section-center">
        {people.map((person,personIndex)=>{
          const{id,image,name,title,quote}=person;
          // some stuff
          return(
            <article className='article' key={id}>
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p>{title}</p>
              <p>{quote}</p>
              <FaQuoteRight/>
            </article>
          )
        })}
       
        <button className='previous'>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className='next'>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>

     
    </section>
  );
}

export default App;
