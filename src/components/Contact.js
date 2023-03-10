import React from 'react';
//motion
import {motion} from 'framer-motion';
//varient
import {fadeIn} from '../variants';
//import emails
import emailjs from 'emailjs-com';


const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_sg7phid', 'template_zisvyzi', e.target, 'Yd7XEqwfgzJWnD7eK_')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section  className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/**text */}
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent from-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together!
            </h2>
          </div>
        </motion.div>

        {/**form */}
        <motion.form 
        onSubmit={sendEmail}
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6
         pb-24 p-6 items-start'>
          <input 
          className='from_name bg-transparent border-b py-3 outline-none w-full placeholder:text-white
           focus:border-accent transition-all'
           type='text'
           placeholder='Your name'
          />
          <input 
          className='from_email bg-transparent border-b py-3 outline-none w-full placeholder:text-white
           focus:border-accent transition-all'
           type='text'
           placeholder='Your email'
          />
          <input 
          className='subject bg-transparent border-b py-3 outline-none w-full placeholder:text-white
           focus:border-accent transition-all'
           type='text'
           placeholder='Subject: '
          />
          <textarea className='html_message bg-transparent border-b py-3 outline-none w-full placeholder:text-white
           focus:border-accent transition-all resize-none mb-12'
           placeholder='Your message'
           ></textarea>
           <input className='btn btn-lg' type='submit' value='Send'/>

        </motion.form>
      </div>
    </div>
    </section>
  );
};

export default Contact;



{
  /**
   * step 1
   *  npm install emailjs-com
   * 
   * step 2
   * import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
       <textarea name="html_message" />
      <input type="submit" value="Send" />
    </form>
  );
}

   * Step 3: Create an emailJS account
Set up an account at https://www.emailjs.com/

Step 4: Connect an email account to emailJS and get YOUR_SERVICE_ID

Step 5: Create a template email message and get YOUR_TEMPLATE_ID

Step 6: Get YOUR_USER_ID
You can find your userID by going to Integration -> API

Replace 'YOUR_USER_ID'(step 2) with the id under API Keys -> Public Key


   * 
   */
}
