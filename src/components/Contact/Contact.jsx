import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // .sendForm('service_5d2c0ii', 'template_e4vytjs', form.current, {
      //   publicKey: 'VnWF6zeGYuDGGdqB0',
      // })
      .sendForm('service_ytufnwn', 'template_4hhoj5n', form.current, {
        publicKey: 'NQKGus61vmTsUrO2f',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatusMessage('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatusMessage('❌ Failed to send the message. Please try again.');
        }
      );
  };


  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      data-aos="zoom-out"
    >

      <div className="max-w-4xl mx-auto space-y-12">

        {/* Title */}
        <div
          data-aos="fade-up"
          className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="mt-2 text-lg text-blue-600">
            We'd love to hear from you! Get in touch for any questions, any info, or assistance.
          </p>
        </div>

        {/* Contact Info */}
        <div
          data-aos="zoom-in"

          className="bg-gray-200 rounded-4xl p-6 space-y-6 shadow-lg shadow-gray-300 ">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-gray-700 text-lg">
              <strong>Email:</strong> <a href="mailto:info@séjourfrançaise.com" className="text-blue-600 hover:underline">info@digikart.com</a><br />
              <strong>Phone / WhatsApp:</strong> <a href="https://wa.me/+917054927386" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">+91 7054927386</a><br />
              Fill out the form below, and we’ll get back to you within 24 hours.<br />
            </p>
          </div>

          {/* Send Us a Message Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📝 Send Us a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-black">Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block ext-black">Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block ext-black">Message / Inquiry</label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="4"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <div className="mt-4 text-center text-lg text-green-600">
                {statusMessage}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>


  )
}

export default Contact
