document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // You can add logic to handle form submission, e.g., send data to a server
      const formData = new FormData(this);
  
      // Display an alert for demonstration purposes
      alert('Form submitted!\n\nData:\n' +
        'Name: ' + formData.get('name') + '\n' +
        'Email: ' + formData.get('email') + '\n' +
        'Message: ' + formData.get('message'));


    });

     
  });
  