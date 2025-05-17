import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from "react-icons/fa";



const Contact = () => {

  const notify = () => toast("Email sent successfully!");

  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    // Check if all input fields are filled
    const inputs = form.current.querySelectorAll('input, textarea');
    const isFilled = Array.from(inputs).every((input) => input.value.trim() !== '');
    setIsFormValid(isFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3e1o6u8', 'template_ibphbo1', form.current, 'lsoWLtyTjCh7OWUkq')
      .then((result) => {
        form.current.reset();
        setIsFormValid(false); // Disable the send button after clearing the form
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    // Initial validation when the component mounts
    handleInputChange();
  }, []);

  return (
    <div id='contact' className='w-full bg-gradient-to-br from-blue-100 via-white to-purple-100'>
      <div className="max-w-[1280px] m-auto py-[20px]">
        <h2 className="text-[30px] text-purple-500 md:text-[40px] font-semibold text-center mt-8">Contact Me</h2>

        <p className='text-center m-[20px] text-[18px] md:text-[25px]'>Feel free to reach out to me for any questions or opportunities!</p>

        <div className="flex justify-center items-center p-6">

          <form ref={form} onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4 bg-[#1f1f2e] rounded-[10px] shadow-md border-2 border-blue-500 p-[30px]">
            <div className="text-purple-500 text-[25px] md:text-[30px] text-center font-semibold">Email Me 🚀</div>
            <div>
              <input type="email" name="from_email"
                onChange={handleInputChange} className="w-full p-2 border-2 border-blue-500 rounded-[10px] text-gray-300 focus:text-white bg-[#1f1f2e] focus:border-purple-500 focus:outline-none transition duration-300" placeholder="your Email" />
            </div>
            <div>
              <input type="text" name="from_name"
                onChange={handleInputChange} className="w-full p-2 rounded-[10px] border-2 border-blue-500 text-gray-300 focus:text-white bg-[#1f1f2e] focus:border-purple-500 focus:outline-none transition duration-300" placeholder="Your Name" />
            </div>
            <div>
              <input type="text" name="subject"
                onChange={handleInputChange} className="w-full p-2 rounded-[10px] border-2 border-blue-500 text-gray-300 focus:text-white bg-[#1f1f2e] focus:border-purple-500 focus:outline-none transition duration-300" placeholder="Subject" />
            </div>

            <div>
              <textarea rows="4" name="message"
                onChange={handleInputChange} className="w-full h-[180px] resize-none  scroll-auto p-2 border-2 border-blue-500 rounded-[10px] text-gray-300 focus:text-white bg-[#1f1f2e] focus:border-purple-500 focus:outline-none transition duration-300" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" value="Send" disabled={!isFormValid} className="w-full bg-gradient-to-br from-purple-500 to-blue-500 text-white px-4 py-3 rounded-[10px] cursor-pointer flex items-center justify-center gap-[10px]" onClick={notify}>Send<FaPaperPlane size={20} /></button>
          </form>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  )
}

export default Contact;