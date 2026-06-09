/* 
 React contact form 

    */

const { useState } = React;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation rules
  function validate(data) {
    const errs = {};

    if (!data.name.trim()) {
      errs.name = 'Name is required';
    } else if (data.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!data.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Enter a valid email address';
    }

    if (!data.subject.trim()) {
      errs.subject = 'Subject is required';
    } else if (data.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters';
    }

    if (!data.message.trim()) {
      errs.message = 'Message is required';
    } else if (data.message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters';
    }

    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate sending (you can replace with EmailJS or Formspree later)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1500);
  }

  // Success message after submit
  if (submitted) {
    return React.createElement('div', { className: 'cf-success' },
      React.createElement('div', { className: 'cf-success-icon' }, '✓'),
      React.createElement('h3', null, 'Message Sent!'),
      React.createElement('p', null, 'Thank you for reaching out. I will get back to you soon.'),
      React.createElement('button', {
        className: 'cf-btn',
        onClick: () => setSubmitted(false)
      }, 'Send Another Message')
    );
  }

  return React.createElement('div', { className: 'cf-wrapper' },
    React.createElement('h3', { className: 'cf-title' }, 'Send a Message'),

    React.createElement('div', { className: 'cf-field' },
      React.createElement('label', { className: 'cf-label' }, 'Your Name'),
      React.createElement('input', {
        className: `cf-input ${errors.name ? 'cf-input-error' : ''}`,
        type: 'text',
        name: 'name',
        placeholder: 'Sarfraz Saeed',
        value: formData.name,
        onChange: handleChange
      }),
      errors.name && React.createElement('span', { className: 'cf-error' }, errors.name)
    ),

    React.createElement('div', { className: 'cf-field' },
      React.createElement('label', { className: 'cf-label' }, 'Email Address'),
      React.createElement('input', {
        className: `cf-input ${errors.email ? 'cf-input-error' : ''}`,
        type: 'email',
        name: 'email',
        placeholder: 'your@email.com',
        value: formData.email,
        onChange: handleChange
      }),
      errors.email && React.createElement('span', { className: 'cf-error' }, errors.email)
    ),

    React.createElement('div', { className: 'cf-field' },
      React.createElement('label', { className: 'cf-label' }, 'Subject'),
      React.createElement('input', {
        className: `cf-input ${errors.subject ? 'cf-input-error' : ''}`,
        type: 'text',
        name: 'subject',
        placeholder: 'Project inquiry / Freelance work',
        value: formData.subject,
        onChange: handleChange
      }),
      errors.subject && React.createElement('span', { className: 'cf-error' }, errors.subject)
    ),

    React.createElement('div', { className: 'cf-field' },
      React.createElement('label', { className: 'cf-label' }, 'Message'),
      React.createElement('textarea', {
        className: `cf-input cf-textarea ${errors.message ? 'cf-input-error' : ''}`,
        name: 'message',
        placeholder: 'Tell me about your project...',
        value: formData.message,
        onChange: handleChange,
        rows: 5
      }),
      errors.message && React.createElement('span', { className: 'cf-error' }, errors.message)
    ),

    React.createElement('button', {
      className: `cf-btn ${loading ? 'cf-btn-loading' : ''}`,
      onClick: handleSubmit,
      disabled: loading
    }, loading ? 'Sending...' : 'Send Message →')
  );
}

// Mount the React component into the DOM
const cfContainer = document.getElementById('contact-form-root');
if (cfContainer) {
    const root = ReactDOM.createRoot(cfContainer);
    root.render(React.createElement(ContactForm));
}