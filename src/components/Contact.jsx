import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import styles from "../style";


function Contact() {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qb1nzvf', 'template_f40z7nf', formRef.current, {
            publicKey: 'RLA-F4q92sWnOkpIt',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (

    <section className='contact font-poppins' id='contact'>
        <div className='textContainer relative'>
            <h1 className={styles.heading2}>Contato</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Nos envie uma mensagem, assim que possivel nos chamaremos</p>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        </div>

        <div className='formContainer z-[1] '>
            <form action="" ref={formRef} onSubmit={sendEmail}>

                
                <input type="text" placeholder='Seu nome' name='name' required/>
                <input type="email" placeholder='Seu email' name='email' required/>
                <textarea  id="" rows={8} required name='message' className='resize-none' placeholder='Sua mensagem'></textarea>
                <button type='submit' className='py-4 px-6 font-poppins font-medium text-[18px] text-white bg-old-gradient rounded-[10px] outline-none ${styles}`}'>Enviar</button>
            </form>
        </div>
        
    </section>

    

  )
}

export default Contact