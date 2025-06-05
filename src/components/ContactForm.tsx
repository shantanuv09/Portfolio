import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="cyber-card">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-8">
          <CheckCircle className="h-16 w-16 text-cyber-green mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-center text-gray-300">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block font-mono text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="cyber-input"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-mono text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="cyber-input"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block font-mono text-sm mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="cyber-input"
              placeholder="Project Inquiry"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block font-mono text-sm mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="cyber-input resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="cyber-button w-full flex justify-center items-center"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;