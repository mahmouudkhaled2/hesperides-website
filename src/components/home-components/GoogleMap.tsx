const GoogleMap = () => {
  return (
    <div className="relative lg:w-1/2 w-full  h-[320px] lg:h-[550px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.117238087214!2d31.337826924455992!3d30.062173774914672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f686a588dcb%3A0xccd07103476fca85!2sevyx%20agency!5e0!3m2!1sar!2seg!4v1721163767398!5m2!1sar!2seg"
        className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
