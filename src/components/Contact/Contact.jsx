// import { addDoc, collection } from 'firebase/firestore'
// import React, { useState } from 'react'
// import toast, { Toaster } from 'react-hot-toast'

// function Contact() {

//   const [userContact, setUserContact] = useState({ username: "", email: "", msg: "" })

//   const handleContact = (e) => {
//     setUserSignUp({ ...userContact, [e.target.name]: e.target.value })
//     console.log(userContact);
//   }

//   const handleSubmitContact = async (e) => {
//     e.preventDefault();
//     if (!userContact.username || !userContact.email || !userContact.msg) {
//       return toast.error("All fields are required");
//     } else {
//       addDoc(collection(db, "contactUser"), {
//         user: username,
//         email: email,
//         msg: msg
//       })
//     }
//   };



//   return (
//     <section className="text-gray-600 body-font relative">
//       <Toaster />
//       <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//         <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//           <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.app.goo.gl/81vGtGbaWxNnNXA17" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />
//           <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//             <div className="lg:w-1/2 px-6">
//               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
//               <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
//             </div>
//             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
//               <a className="text-indigo-500 leading-relaxed">example@email.com</a>
//               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
//               <p className="leading-relaxed">123-456-7890</p>
//             </div>
//           </div>
//         </div>
//         <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//           <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>

//           <div className="relative mb-4">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
//             <input type="text" id="name"
//               value={userContact.username}
//               onChange={handleChange}
//               name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//           </div>

//           <div className="relative mb-4">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
//             <input type="email"
//               value={userContact.email}
//               onChange={handleChange}
//               id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//           </div>

//           <div className="relative mb-4">
//             <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
//             <textarea id="msg" value={userContact.msg}
//               onChange={handleChange} name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
//           </div>

//           <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmitContact}>Button</button>
//           <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
//         </div>

//       </div>
//     </section>

//   )
// }

// export default Contact


import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { db } from '../../Firebase/Firebase'

function Contact() {

  const [userContact, setUserContact] = useState({ username: "", email: "", msg: "" });

  const handleChange = (e) => {
    setUserContact({ ...userContact, [e.target.name]: e.target.value });
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    const { username, email, msg } = userContact;

    if (!username || !email || !msg) {
      return toast.error("All fields are required");
    }

    try {
      await addDoc(collection(db, "contactUser"), {
        user:userContact.username,
        email: userContact.email,
        msg: userContact.msg
      });
      toast.success("Message sent!");
      setUserContact({ username: "", email: "", msg: "" }); // Reset form
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <Toaster />
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.app.goo.gl/81vGtGbaWxNnNXA17" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>

          <div className="relative mb-4">
            <label htmlFor="username" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userContact.username}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userContact.email}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="msg" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="msg"
              name="msg"
              value={userContact.msg}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleSubmitContact}
          >
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
