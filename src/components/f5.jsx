import React from "react";
import { CheckCircle } from "lucide-react";

export default function F5() {
  const reviews = [
    {
      name: "Zach R.",
      verified: true,
      rating: 5,
      title: "Better than TRT. Lab confirmed.",
      text: `“I got off TRT months ago to do something more natural. This boosted my total T by 225% since being off TRT. My levels went back down to 330ng/dl after cycling off; now I am up to 742ng/dl. I just confirmed with labs as of 4/16. This is higher than my total T has been on actual TRT. Amazing!”`,
    },
    {
      name: "Jay S.",
      verified: true,
      rating: 5,
      title: "Was a skeptic but not now after 30 days",
      text: `“I was able to drop almost 20lbs in 30 days. My energy levels throughout the day were up. I wasn’t crashing in the evenings after I got home from work.”`,
    },
    {
      name: "Joshua D.",
      verified: true,
      rating: 5,
      title: "This boosted my Testosterone more than 3X",
      text: `“To be honest, I was skeptical when I saw the ad for this supplement while doom scrolling on Instagram like many of us do.”`,
    },
    {
      name: "Shane W.",
      verified: true,
      rating: 5,
      title: "Energized with mental focus",
      text: `“After three weeks I have noticed a serious increase in my overall energy and mental clarity. There are no more afternoons where I struggle with energy. My brain and mind are sharp and clear.”`,
    },
  ];

  const ReviewCard = ({ review, className = "" }) => (
    <div
      className={`bg-black/40 border border-gray-800 rounded-xl p-6 shadow-md backdrop-blur-sm text-left ${className}`}
    >
      <div className="flex items-center gap-2 mb-1">
        <p className="font-semibold">{review.name}</p>
        {review.verified && (
          <div className="flex items-center text-[11px] bg-[#00aaff]/10 text-[#00aaff] px-2 py-[1px] rounded-full">
            <CheckCircle size={10} className="mr-1" />
            Verified buyer
          </div>
        )}
      </div>

      <div className="flex mb-2">
        {[...Array(review.rating)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#00aaff"
            className="w-4 h-4"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.19 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.19 3.674c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.175 0l-3.124 2.27c-.784.57-1.838-.197-1.54-1.118l1.19-3.674a1 1 0 00-.364-1.118l-3.124-2.27c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.19-3.674z" />
          </svg>
        ))}
      </div>

      <p className="font-semibold text-[15px] mb-1">{review.title}</p>
      <p className="text-sm text-gray-300 leading-relaxed">{review.text}</p>
    </div>
  );

  return (
    <div className="w-full bg-transparent text-white py-20 px-6 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-snug">
        See How <span className="text-[#00aaff]">247,353+ Men Over 30</span> Are <br />
        Burning Fat, Building Strength, <br />
        <span className="text-[#00aaff]">And Getting Results That Show</span>
      </h2>

      {/* Main Row: Image + 2 Reviews */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-14 max-w-7xl w-full">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start w-full lg:w-[420px]">
          <div className="relative rounded-xl overflow-hidden w-[400px] md:w-[420px] h-[400px] shadow-xl">
            <img
              src="/images/image 115.png"
              alt="After"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-black/70 px-3 py-1 rounded text-xs font-semibold">
              AFTER
            </div>
            <div className="absolute bottom-2 left-2 bg-[#00aaff] px-3 py-1 rounded text-xs font-semibold text-black">
              T LEVELS: 850
            </div>
          </div>
        </div>

        {/* Top two reviews, same height as image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 h-[400px] content-stretch">
          {reviews.slice(0, 2).map((review, index) => (
            <ReviewCard key={index} review={review} className="h-full" />
          ))}
        </div>
      </div>

      {/* Bottom reviews full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-none px-8">
        {reviews.slice(0, 4).map((review, index) => (
          <ReviewCard
            key={index}
            review={review}
            className="h-[300px] w-full"
          />
        ))}
      </div>
    </div>
  );
}
