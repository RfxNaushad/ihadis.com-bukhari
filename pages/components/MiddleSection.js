import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Hexagon from "./Hexagon";


const MiddleSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const data = {
    bukhari: [
      { serial: 1, title: "ওহীর সূচনা অধ্যায়", range: "১ - ৭" },
      { serial: 2, title: "ঈমান", range: "৮ - ৫৮" },
      { serial: 3, title: "ইল্‌ম", range: "৫৯ - ১৩৪" },
      { serial: 4, title: "ওজু", range: "১৩৫ - ২৪৭" },
      { serial: 5, title: "গুস্‌ল", range: "২৪৮ - ৩১০" },
      { serial: 6, title: "তায়াম্মুম", range: "৩১১ - ৩৫০" },
      { serial: 7, title: "নামাজ", range: "৩৫১ - ৫০০" },
      { serial: 8, title: "যাকাত", range: "৫০১ - ৬০০" },
      { serial: 9, title: "সাওম", range: "৬০১ - ৭০০" },
      { serial: 10, title: "হজ", range: "৭০১ - ৭৫০" },
    ],
  };

  return (
    <section className="bg-gray-100 h-[calc(100vh-167px)] lg-min:bg-white rounded-tl-2xl rounded-tr-2xl w-full xss:mb-10 scroll-mt-20">
      <div className="flex items-center rounded-tl-2xl rounded-tr-2xl bg-white px-6 py-4 border-b-2">
        {/* This section is visible from 1280px and hidden below */}
        <div className="hidden xl:flex items-center">
          <Image
            src="/bread-crumb-book.svg"
            width={20}
            height={20}
            alt="Home Logo"
            className="block pr-1"
          />
          <h2 className="text-sm text-black">
          <FontAwesomeIcon className="pr-1" icon={faChevronRight} width={6} height={6}/>Bukhari</h2>
        </div>

        {/* This section is hidden from 1280px and visible below */}
        <div className="flex xl:hidden items-center">
          <FontAwesomeIcon icon={faBars} width={20}
            height={20}/>
          <h2 className="text-sm text-black font-semibold">সহিহ বুখারী</h2>
        </div>
      </div>

      <div className="w-full overflow-y-auto rounded-bl-2xl rounded-br-2xl bg-white py-6 flex flex-col h-full">
        <div className="flex justify-between items-center pb-4 mb-4 pl-6 pr-8">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-gray-700">সহিহ বুখারী</h2>
          </div>

          <div className='relative border-2  rounded-lg'> 
          <input
            type="text"
            placeholder="Search Hadith"
            className="pl-10 pr-14 py-3 rounded bg-white text-black focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>
        </div>
        <div className="mb-4 border-b border-gray-100	pb-2 pl-6 pr-8">
          <p className={`text-gray-700 text-sm ${!seeMore ? "line-clamp-2" : ""}`}>
          সংকলক : শাইখ ইমামুল হুজ্জাহ আবু ‘আবদুল্লাহ মুহাম্মাদ বিন ইসমা’ঈল বিন ইবরাহীম বিন 
          মুগীরাহ্‌ আল বুখারী আল-জু’ফী। মোট হাদীস সংখ্যা : ৭৫৬৩ টি। প্রকাশনী : 
          তাওহীদ পাবলিকেশন্স। মৌলিক হাদীস গ্রন্থ হিসাবে সহীহুল বুখারী গ্রন্থটি হাদীসের 
          কিতাবগুলির মধ্যে সর্বশ্রেষ্ঠ। শুধু তাই নয় এর সংশ্লিষ্ট ব্যক্তিগবের্গর সর্বজন স্বীকৃত মন্তব্য হলো : 
          আল কুরআনের পরে মানব রচিত বা সংকলিত গ্রন্থের মধ্যে সর্বশ্রেষ্ঠ কিতাব নিঃসন্দেহে সহীহুল বুখারী। 
          বুখারী সংকলন করতে গিয়ে ইমাম বুখারী (রহঃ) কে যে কী পরিমাণ পরিশ্রম ও সাধনা করতে হয়েছে তা 
          বর্ণনাতীত। মহান আল্লাহ তা’আলা তাঁর এই পরিশ্রমকে ক্ববুল করুন এবং এ মহান সাদাকায়ে যারিয়ার জন্য 
          তাঁকে জান্নাতুল ফেরদৌস-এর পুরষ্কারে ভুষিত করুন। - আমীন
          </p>
          <button
            className="text-blue-500 text-xs"
            onClick={() => setSeeMore(!seeMore)}
          >
            {!seeMore ? "আরো দেখুন" : "লুকান"}
          </button>
        </div>
        {/* Scrollable Data Section */}
        <div className="flex-1 px-4 space-y-2">
          {data.bukhari.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-100 bg-white px-6 py-7 rounded hover:bg-green-100"
              onMouseEnter={() => setHoveredItem(index)} 
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Hexagon with Hover-Dependent Color */}
              <div className="flex items-center space-x-4">
                <Hexagon
                  number={item.serial}
                  hoveredItem={hoveredItem}
                  index={index}
                />
                <h4 className="font-bold text-sm text-gray-800">{item.title}</h4>
              </div>
              <div className="text-gray-500 ml-auto text-sm">{item.range}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
