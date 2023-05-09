import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
      className="border border-radius-12 border-red-950"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d179.74899719178887!2d-79.437313876565!3d43.876884029532256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4ddd7af753%3A0x71fb249905dd578b!2s10211%20Yonge%20St%2C%20Richmond%20Hill%2C%20ON%20L4C%203B3!5e0!3m2!1sen!2sca!4v1683639790813!5m2!1sen!2sca"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
