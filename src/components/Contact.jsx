import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSending, setIsSending] = useState(false); // Prevent spamming

  const handleInputChange = () => {
    const inputs = form.current.querySelectorAll('input, textarea');
    const isFilled = Array.from(inputs).every((input) => input.value.trim() !== '');
    setIsFormValid(isFilled);
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.current.from_email.value.trim();
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSending(true); // Disable button while sending

    emailjs.sendForm('service_3e1o6u8', 'template_ibphbo1', form.current, 'lsoWLtyTjCh7OWUkq')
      .then(() => {
        toast.success("Email sent successfully!");
        form.current.reset();
        setIsFormValid(false);
      })
      .catch(() => {
        toast.error("Failed to send email. Please try again.");
      })
      .finally(() => {
        setIsSending(false); // Enable button after sending
      });
  };

  useEffect(() => {
    // Initial validation when the component mounts
    handleInputChange();
  }, []);

  return (
    <div id='contact' className='w-full bg-gradient-to-br from-cyan-100 via-white to-red-100'>
      <div className="max-w-[1280px] m-auto py-[20px]">
        <h2 className="text-[30px] text-purple-500 md:text-[40px] font-semibold text-center mt-8">Contact Me</h2>
        <p className='text-center m-[20px] text-[16px] md:text-[20px] text-gray-800'>Feel free to reach out to me for any questions or opportunities!</p>

        <div className="flex justify-center items-center p-6">
          <form ref={form} onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4 bg-[#1f1f2e] rounded-[10px] border-2 border-blue-500 p-[30px]">
            <div className="text-white text-[25px] md:text-[30px] text-center font-semibold">Email Me 🚀</div>

            <input type="email" name="from_email" onChange={handleInputChange}
              className="w-full p-2 border-2 border-blue-500 rounded-[10px] text-gray-300 focus:text-white bg-[#1f1f2e] focus:border-purple-500 focus:outline-none transition duration-300" placeholder="Your Email" />

            <input type="text" name="from_name" onChange={handleInputChange}
              className="w-full p-2 rounded-[10px] border-2 border-blue-500 text-gray-300 focus:text-white bg-[#1f1f2e] focus:border-purple-500 focus:outline-none transition duration-300" placeholder="Your Name" />

            <input type="text" name="subject" onChange={handleInputChange}
              className="w-full p-2 rounded-[10px] border-2 border-blue-500 text-gray-300 focus:text-white bg-[#1f1f2e] focus:border-purple-500 focus:outline-none transition duration-300" placeholder="Subject" />

            <textarea rows="4" name="message" onChange={handleInputChange}
              className="w-full h-[180px] resize-none scroll-auto p-2 border-2 border-blue-500 rounded-[10px] text-gray-300 focus:text-white bg-[#1f1f2e] focus:border-purple-500 focus:outline-none transition duration-300" placeholder="Your message..."></textarea>

            <button type="submit"
              disabled={!isFormValid || isSending}
              className={`w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-3 rounded-[10px] cursor-pointer font-medium text-[16px] md:text-[20px] flex items-center justify-center gap-[10px] ${(!isFormValid || isSending) ? 'opacity-50 disabled:cursor-not-allowed' : ''}`}
            >
              {isSending ? "Sending..." : "Send"} <FaPaperPlane size={20} />
            </button>
          </form>
        </div>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </div>
  )
}

export default Contact;
