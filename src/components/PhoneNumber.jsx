import React, { useState } from "react";

const PhoneNumber = () => {
  const [phone, setPhone] = useState("+1234567890");
  return (
    <SectionWrapper title="Phone Number">
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Enter your phone number"
      />
      <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Update Phone</button>
    </SectionWrapper>
  );
};

export default PhoneNumber;
