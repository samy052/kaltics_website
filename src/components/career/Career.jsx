import React, { useState } from 'react'
import img1 from "../../assets/careerMain.jpeg"
import img2 from "../../assets/careerImg2.jpeg"

import "./Career.css"

function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
  };
  return (
    <section className='career_page'>
      <div className='heading'>
        <h1>Careers</h1>
      </div>
      <div className='career_page_content'>


        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="role">Applying for Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select a role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="upload resume">Upload resume:</label>

            <input type="file" />
          </div>

          <button type="submit">Submit</button>
        </form>


        <div className="image_container">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
        </div>

      </div>



    </section>
  )
}

export default Career