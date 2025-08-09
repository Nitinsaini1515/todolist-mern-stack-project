import React from 'react'

const AboutUs = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">About Us</h1>
      {/* Introduction Field */}
      <div className="mb-6 text-center">
        <div className="inline-block bg-gray-100 rounded-lg px-6 py-4 shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Hi, I'm Nitin saini !</h2>
          <p className="text-gray-600">
            I'm a passionate developer who loves building intuitive and efficient web applications.
            I created this todo list app to help people stay organized and productive every day.
          </p>
        </div>
      </div>
      <div className="text-gray-700 text-lg mb-6 text-center">
        Welcome to our todo list app — a smart and simple way to organize your daily life.<br />
        Our mission is to help you stay productive, reduce stress, and never miss a deadline again.
      </div>
      <div className="mb-8">
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Create, edit, and delete tasks in seconds.</li>
          <li>Keep your to-do list organized across devices.</li>
          <li>Enjoy a clean and distraction-free interface.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
        <p className="text-gray-600">
          To be your everyday companion for managing tasks, boosting productivity,
          and helping you focus on what truly matters.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Simple & user-friendly design</li>
          <li>Cloud sync for your tasks</li>
          <li>Works perfectly on desktop & mobile</li>
        </ul>
      </div>
      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="https://instagram.com/nitin_saini0234"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition"
          aria-label="Instagram"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/nitinsaini1515"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition"
          aria-label="LinkedIn"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/>
          </svg>
        </a>
        <a
          href="https://github.com/nitinsaini1515"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition"
          aria-label="GitHub"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.23 9.23 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AboutUs
