import React from 'react';

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <h3>Address</h3>
      <p>
        Sameer Industrial Park - Mombasa Road <br />
        P.O. Box 27719 – 00506 GPO Nairobi, Kenya{' '}
      </p>
      <h3>Phone Mobile</h3>
      <p>
        (+254) 714 392898 <br />
        (+254) 733 483396{' '}
      </p>
      <h3>Email</h3>
      <p>
        administration@vermont-design.com <br />
        sales@vermont-design.com
      </p>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.811185372772!2d36.823941614753906!3d-1.2874015990610084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1127e1bfa6b9%3A0x183ca9b041ad8b19!2sShankardass%20House!5e0!3m2!1sen!2ske!4v1665086751279!5m2!1sen!2ske'
        width='90%'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
      ></iframe>
    </div>
  );
}

export default Contact;
