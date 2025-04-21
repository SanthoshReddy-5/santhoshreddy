import React,{useRef,useState,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";


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
        <h2 className="text-[25px] text-purple-500 md:text-[35px] font-medium text-center mt-8">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] p-6">
          <form ref={form} onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4 bg-[#1f1f2e] rounded-[10px] shadow-md border-2 border-blue-500 p-[30px]">
            <div className="text-gray-300 text-[25px] text-center font-medium">Get In Touch</div>
            <div>
              <input type="email" name="from_email"
            onChange={handleInputChange} className="w-full p-2 border-2 border-blue-500 rounded-[10px] text-gray-300" placeholder="your Email" />
            </div>
            <div>
              <input type="text"  name="from_name"
            onChange={handleInputChange} className="w-full p-2 rounded-[10px] border-2 border-blue-500 text-gray-300" placeholder="Your Name" />
            </div>
            <div>
              <input type="text"  name="subject"
            onChange={handleInputChange} className="w-full p-2 rounded-[10px] border-2 border-blue-500 text-gray-300" placeholder="Subject" />
            </div>
            
            <div>
              <textarea rows="4"  name="message"
            onChange={handleInputChange} className="w-full h-[180px] resize-none  scroll-auto p-2 border-2 border-blue-500 rounded-[10px] text-gray-300" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" value="Send" disabled={!isFormValid} className="w-full bg-gradient-to-br from-purple-500 to-blue-500 text-white px-4 py-3 rounded-[10px] cursor-pointer" onClick={notify}>Send</button>
          </form>


          <div className="w-full md:w-1/2 flex py-[20px] flex-col items-center justify-center bg-[#1f1f2e] gap-[15px] md:gap-6 md:items-center border-2 border-blue-500 rounded-[10px]">
            <h2 className='font-medium text-[25px] md:text-[35px] text-center text-purple-500'>Santhosh Reddy</h2>
            <div className='text-white text-[20px] md:text-[25px]'>Also follow on</div>
            <div className='flex items-center justify-center flex-col gap-[15px]'>
              <a href="https://www.linkedin.com/in/santhosh-reddy-6a977a2ba" className="text-[15px] md:text-[20px] bg-[#2b2b3c] flex items-center gap-2 text-white border-2 px-4 py-2 rounded-full border-blue-500">
                <img src={linkedin} alt="LinkedIn Logo" className='w-[40px] h-[40px]' />LinkedIn
              </a>
              <a href="https://github.com/SanthoshReddy-5" className="text-[15px] md:text-[20px] flex items-center gap-2 bg-white text-black border-2 px-4 py-2 rounded-full border-blue-500">
                <img src={github} alt="GitHub Logo" className='w-[40px] h-[40px]' />GitHub
              </a>
              <a href="https://instagram.com/santhosh__reddy__5" className="text-[15px] md:text-[20px] bg-[#2b2b3c] flex items-center gap-2 text-white border-2 px-4 py-2 rounded-full border-blue-500">
                <img src={instagram} alt="Instagram Logo" className='w-[40px] h-[40px]' />Instagram
              </a>
            </div>
            <div className='text-white text-center md:text-[14px] text-[12px]'>&copy; 2025 Santhosh Reddy. All rights reserved.</div>
          </div>
        </div>
        <ToastContainer position="bottom-right"/>
      </div>
    </div>
  )
}

export default Contact;