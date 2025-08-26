import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FrontSupport = () => {
  const images = [
    "/images/homepic1.png",
    "/images/homepic2.png",
    "/images/homepic3.png",
    "/images/homepic4.png",
    "/images/homepic5.png",
    "/images/homepic7.png",
    "/images/homepic8.png",
    "/images/homepic9.png",
    "/images/homepic10.png",
    "/images/homepic11.png",
    "/images/homepic12.png",
    "/images/homepic13.png",
    "/images/homepic14.png",
    "/images/homepic15.png",
    "/images/homepic16.png",
    "/images/homepic17.png",
    "/images/homepic18.png",
    "/images/homepic19.png",
    "/images/homepic20.png",
    "/images/homepic21.png",
  ];

  const [phone, setPhone] = React.useState("");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row justify-center items-start px-10 pt-20 pb-12 gap-10 relative">
      {/* Custom styles for react-phone-input-2 */}
      <style>{`
        .react-tel-input .form-control {
          background-color: #1e1e1e !important;
          color: white !important;
          border: 1px solid #444 !important;
          border-radius: 0.375rem !important; /* rounded-md */
          padding-left: 3.5rem !important; /* pl-16 */
          height: 2.5rem !important; /* h-10 */
        }
        .react-tel-input .selected-flag {
          background-color: #1e1e1e !important;
          border: 1px solid #dc2626 !important;
          border-radius: 0.375rem 0 0 0.375rem !important;
        }
        .react-tel-input .country-list {
          background-color: #000 !important;
          color: white !important;
          max-height: 200px;
          overflow-y: auto;
        }
        .react-tel-input .country-list .country.highlight {
          background-color: #dc2626 !important;
          color: white !important;
        }
        .react-tel-input .country-list .country:hover {
          background-color: #b91c1c !important;
          color: white !important;
        }
        .react-tel-input .country-list::-webkit-scrollbar {
          width: 8px;
        }
        .react-tel-input .country-list::-webkit-scrollbar-track {
          background: #000;
        }
        .react-tel-input .country-list::-webkit-scrollbar-thumb {
          background-color: #dc2626;
          border-radius: 10px;
          border: 2px solid #000;
        }
        .react-tel-input .country-list {
          scrollbar-width: thin;
          scrollbar-color: #dc2626 #000;
        }
      `}</style>

      {/* Left Section */}
      <div className="md:w-1/2 space-y-6 flex flex-col justify-start relative z-20">
        <div>
          <h1 className="text-3xl font-bold">Welcome to our support page!</h1>
          <p className="text-sm text-gray-400 mt-2">
            We're here to help you with any problems you may be having with our product.
          </p>
        </div>

        <div
          className="bg-[#1e1e1e] p-5 rounded-xl overflow-hidden relative"
          style={{
            width: "533px",
            height: "477px",
            zIndex: 20,
            marginBottom: "-100px",
          }}
        >
          <div className="grid grid-cols-4 gap-2 animate-scroll-up move-right">
            {images.map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden"
                style={{ width: "125px", height: "168px" }}
              >
                <img
                  src={img}
                  alt={`img-${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="md:w-1/2 w-full bg-[#111] p-6 rounded-lg shadow-md flex flex-col justify-start z-10"
        style={{
          marginTop: "120px",
        }}
      >
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full p-2 rounded bg-[#1e1e1e] border border-gray-700 text-white focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="w-full p-2 rounded bg-[#1e1e1e] border border-gray-700 text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-2 rounded bg-[#1e1e1e] border border-gray-700 text-white focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Phone Number</label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                containerClass="w-full"
                inputClass=""
                buttonClass=""
                dropdownClass="bg-black"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              placeholder="Enter your Message"
              rows="4"
              className="w-full p-2 rounded bg-[#1e1e1e] border border-gray-700 text-white focus:outline-none"
            ></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="accent-red-600" />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FrontSupport;
