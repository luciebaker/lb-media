import React from 'react'
import FeaturedText from '../utilities/featuredText'

const ContactForm = () => {
    return (
        <div className="container">
        <FeaturedText text="Get in touch" />
        <form action="https://formspree.io/mqkarvoj" method="POST">
        <div className="form-row mt-4">
        <div className="form-group col-md-6">
        <label htmlFor="name" className="contact-text">Name</label>
        <input type="text" name="name" className="form-control contact-input" id="name"></input>
        </div>
        <div className="form-group col-md-6">
        <label htmlFor="email" className="contact-text" >Email</label>
        <input type="email" name="email" className="form-control contact-input" id="email"></input>
        </div>
        </div>
        <div className="form-group">
        <label htmlFor="subject" className="contact-text">Subject</label>
        <input type="text" name="subject" className="form-control contact-input" id="subject"></input>
        </div>
        <div className="form-group">
        <label htmlFor="message" className="contact-text">Your Message</label>
        <textarea className="form-control contact-input" name="message" id="message" rows="6"></textarea>
        </div>
        <input type="submit" value="submit your message" className="btn btn-bordered-teal submit-btn-text mb-5">
        </input>
        
        </form>
    
        </div>
    )
}

export default ContactForm