import React, { useState } from 'react'
import './App.css';
import Card from './component/Card/Card.js';
import {Button} from 'react-bootstrap';
import MyVerticallyCenteredModal from './component/Modal/MyVerticallyCenteredModal.js'

import { IoMdAddCircle } from "react-icons/io";


function App() {
          let arr = [
            {id: 1 , title : "First Note",tagline:"First Tagline", body: "Hello there"},
            {id: 2 , title : "2  Note",tagline:"First Tagline", body: "Hello there"},
            {id: 3 , title : "3 Note",tagline:"First Tagline", body: "Hello there"},
            {id: 4 , title : "4 Note",tagline:"First Tagline", body: "Hello there"},
            {id: 5 , title : "5 Note",tagline:"First Tagline", body: "Hello there"},
          ]

          const [component,setComponent] = useState([])
          const componentData = (formData)=>{
            let tempArray = <Card title={formData.title} tagline= {formData.tagline} body = {formData.body}/>
            setComponent(tempArray);
        }

          
        
          const [modalShow, setModalShow] = React.useState(false);
          
        //   const [card,setCard] =useState(false)
           const [list,setList] = useState(arr);
          
        // function toggleCard()
        // {
        //   setCard(!card);
        // }
        const getFormData = (formData)=>{
            const newFormData ={
              ...formData,
              id:Math.random().toString()
            }
            
            setList((prevData)=>{
              return[newFormData,...prevData];
            });
          }
          console.log(list);

  return (
   <>
   <div className='App'>
   <br/>


    <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Note
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        getFormData = {getFormData}
      />
   </div>   
   {list.map(item=>
   {console.log(item,"abc");
    return(
    <div class="d-flex align-items-start">
      <div class="d-flex flex-row mb-3">
  <div class="p-2"> 
  <Card title={item.title} tagline = {item.tagline} body = {item.body}/>
  </div>
  
</div>
     
    </div>
   )})}
   </>
  );
}

export default App;
