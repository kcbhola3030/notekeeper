import { AiOutlineCloseCircle } from "react-icons/ai";
import React, { useState } from 'react';
import './Card.css'
function Card (props)
{
  const [title,setTitle] = useState(props?.title);
  const [tag,setTag] = useState(props?.tagline);
  const [body,setBody] = useState(props?.body);
  const titleHandler=(e)=>
  {
    setTitle(e.target.value);
  }
  const tagHandler=(e)=>
  {
    setTag(e.target.value);
  }
  const bodyHandler = (e)=>
  {
    setBody(e.target.value);
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    const formData={
      title:title,
      tagline:tag,
      body:body
    }
    props.getFormData(formData);
  }
    return(
    <>

<form onSubmit={submitHandler} >

<div class="p-3 d-flex flex-column mb-3 card">
  <div class="p-2 title2">

   <p>Title</p>
<input class="floating-input" type="text" value={props.title} style={{marginTop:'-24px'}} onChange={titleHandler} placeholder=" "/></div>
  
  <div class="p-2 title2 tag">

  <p>Tagline</p>
  <input class="floating-input" type="text" value={props.tagline} style={{marginTop:'-24px'}} onChange={tagHandler} placeholder=" "/>

  </div>
  <div class="p-2 card_body">
  <div class="floating-label">      
      <textarea class="floating-input floating-textarea"  value={props.body} onChange={bodyHandler} placeholder=" "></textarea>
      <span class="highlight"></span>
      <label>Write your thoughts here...</label>
    </div>
  </div>
</div>
</form>
  
    </>
    );
}
export default Card;