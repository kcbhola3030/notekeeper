import React, { useState } from 'react'
import { Tab } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Card/Card.css';
import './modal.css'

 const MyVerticallyCenteredModal=(props) =>{
    const [title,setTitle] = useState(" ");
    const [tag,setTag] = useState(" ");
    const [body,setBody] = useState(" ");
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
  return (
    <Modal 
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a Note
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={submitHandler} >

<div class="p-3 d-flex flex-column mb-3 ">
  <div class="p-2 title2">
  <div class="d-flex">
  <div class=" w-100">
  <div class="floating-label">
      <input class="floating-input" type="text" onChange={titleHandler} placeholder=" "/>
      <span class="highlight"></span>
      <label>{props.title}Title</label>
  </div>
  </div>
</div>
  </div>
  <div class="p-2 title2 tag">
  <div class="floating-label">
      <input class="floating-input" type="text" onChange={tagHandler}  placeholder=" "/>
      <span class="highlight"></span>
      <label>{props.tagline}Tagline</label>
  </div>
  </div>
  <div class="p-2 card_body">
  <div class="floating-label">      
      <textarea class="floating-input floating-textarea" onChange={bodyHandler}  placeholder=" "></textarea>
      <span class="highlight"></span>
      <label>Write your thoughts here...</label>
    </div>
  </div>
</div>
<Button onClick={props.onHide}>Close</Button> <t/>
        <Button variant="primary" type='submit' value='submit'
         onClick={event => {
             props.onHide();
            }}
            >
            Save Changes
          </Button>
</form>
      </Modal.Body>
      
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
