import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"
import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
      alert('Please verify you are not a robot.');
      return;
    } // Lógica para enviar el formulario 

    console.log('Formulario enviado:', { email, message });
  }

  return (
    <section id="contacto" className="py-20 animate-fade-in">
      <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
      <div className="flex flex-col items-center space-y-6">
        {/* <form onSubmit={handleSubmit}>
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="p-2 border rounded"
            required
          />
          <textarea value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="p-2 border rounded"
            required
          />
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={setCaptcha}
          />
          <button type="submit"
            className="bg-color_card px-4 py-2 rounded"
          >
            Send
          </button>
        </form> */}
        <a href="mailto:erickjesus.guzmanascencio@gmail.com" className="flex items-center text-[#f0bf6c] hover:underline transition-transform duration-300 hover:scale-105">
          <FaAt className="w-6 h-6 mr-2" />
          Send Message
          {/* erickjesus.guzmanascencio@gmail.com */}
        </a>
        <a href="https://linkedin.com/in/erick-jesús-guzmán-ascencio-60a068159/" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#f0bf6c] hover:underline transition-transform duration-300 hover:scale-105">
          <FaLinkedin className="w-6 h-6 mr-2" />
          LinkedIn
        </a>
        <a href="https://github.com/ErickJGAscencio" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#f0bf6c] hover:underline transition-transform duration-300 hover:scale-105">
          <FaGithub className="w-6 h-6 mr-2" />
          GitHub
        </a>
      </div>
    </section>
  )
}

