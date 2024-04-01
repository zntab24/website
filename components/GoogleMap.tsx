import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <iframe
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12425.984466710555!2d-106.98792372892393!3d38.86688970483198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8740723e8a38d3e3%3A0x37006e19d5e7f39f!2sCrested%20Butte%2C%20CO%2081224!5e0!3m2!1sen!2sus!4v1711255614436!5m2!1sen!2sus"
    ></iframe>
  );
};

export default GoogleMap;
