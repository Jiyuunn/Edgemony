import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import pusheen from '../assets/pusheen.png'; 

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [queryType, setQueryType] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div className={styles.formContainer}>
        <h2>Contact Us</h2>
        <label>First Name *</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        
        <label>Last Name *</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        
        <label>Email Address *</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label>Query Type *</label>
        <div>
          <input type="radio" id="general" name="queryType" value="General Enquiry" checked={queryType === 'General Enquiry'} onChange={(e) => setQueryType(e.target.value)} />
          <label htmlFor="general">General Enquiry</label>
          <input type="radio" id="support" name="queryType" value="Support Request" checked={queryType === 'Support Request'} onChange={(e) => setQueryType(e.target.value)} />
          <label htmlFor="support">Support Request</label>
        </div>
        
        <label>Message *</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        
        <div className={styles.consentCheckbox}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <label>I consent to being contacted by the team *</label>
        </div>
        
        <button>Submit</button>
      </div>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Form Data</h2>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Query Type:</strong> {queryType}</p>
        <p><strong>Message:</strong> {message}</p>
        <p><strong>Consent:</strong> {consent ? 'Yes' : 'No'}</p>
        <img src={pusheen} alt="Pusheen" style={{ marginTop: '20px', width: '100px' }} />
      </div>
    </div>
  );
};

export default ContactForm;
