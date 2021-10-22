import React, {useState} from 'react';
import './SendMail.css';
import {send} from 'emailjs-com';
import CloseIcon from "@material-ui/icons/Close"
import {useDispatch} from "react-redux";
import {closeSendMessage} from "./features/mailSlice";
import {Button} from "@material-ui/core";
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import {db} from "./Firebase";

function SendMail() {
    const dispatch = useDispatch();
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
     
      
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_yzyfjrs',
          'template_9qxjr8s',
          toSend,
          'user_vMO4bVzfjqWIAW17AjzxG'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);

            const onSubmit = (formData) => {
                console.log(formData);
                 db.collection('emails').add({
                     to: formData.to,
                     subject: formData.subject,
                     message: formData.message,
                     file:formData.file,
                     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
           
                 });
                 dispatch(closeSendMessage());
            };



          });
          dispatch(closeSendMessage());
      };
   
    
  



    return (
        <div className="sendMail">
               <div className="sendMail__header">
                    <h3>New Message </h3>
                    <CloseIcon onClick={()=> dispatch(closeSendMessage())}
                    className="sendMail__close"/>
              </div> 

              <form onSubmit={onSubmit}>

            

               <input
          
          type='text'
          name='to_name'
          placeholder='to name'
          value={toSend.to_name}
          onChange={handleChange}

          
                />

                 <input
                  
            
                    className="sendMail__message"
                    type="text"
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
          
                />
              
              <input
          type='text'
          name='reply_to'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />

              <div className="sendMail__options">
                        <Button className="sendMail__send"
                                variant="contained"
                                color="primary"
                                type="submit"

                        >Send</Button>

        
         <input type="file" onClick={handleChange}
         
         
         
         /> 
        
                        {/* <IconButton type="file"  onChange={handleSubmit}  >
                  < AttachFileIcon  />
              </IconButton>  */}
                   </div>
          </form>
      </div>
               
    )
}

export default SendMail;


