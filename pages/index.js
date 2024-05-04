import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LeftSection from "./components/LeftSection";
// import HamburgerMenu from "./components/HamburgerMenu ";
import MiddleSection from "./components/MiddleSection";
import RightSection from "./components/RightSection";

export async function getStaticProps() {
  try {
    // Fetch categories
    const categoriesRes = await fetch(
      "https://dua-server-gamma.vercel.app/categories"
    );
    const categories = await categoriesRes.json();

    // Fetch sub-categories
    const subCategoriesRes = await fetch(
      "https://dua-server-gamma.vercel.app/sub-categories"
    );
    const subCategories = await subCategoriesRes.json();

    // Fetch duas
    const duasRes = await fetch("https://dua-server-gamma.vercel.app/duas");
    const duas = await duasRes.json();

    if (!categoriesRes.ok || !subCategoriesRes.ok || !duasRes.ok) {
      throw new Error("Failed to fetch data");
    }

    return {
      props: {
        categories,
        subCategories,
        duas,
      },

      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        categories: [],
        subCategories: [],
        duas: [],
      },
    };
  }
}

function HomePage({ categories, subCategories, duas }) {
  return (
    // <div className="flex flex-col h-screen">
    //   <Navbar />

    //   <div className="flex flex-1 overflow-hidden">
    //     <aside class="bg-gray-100 xl:w-24 xl:p-4 overflow-auto">
    //       <Sidebar />
    //     </aside>

    //     <div className="flex h-full w-full overflow-hidden">
    //       <section className="hidden xl:block  xl:w-1/4 bg-white p-4 border-r">
    //         <LeftSection />
    //       </section>

    //       {/* MiddleSection - Takes full width when LeftSection is hidden */}
    //       <section className="w-full xl:w-1/2 bg-white p-4 border-r">
    //         <MiddleSection />
    //       </section>

    //       {/* RightSection - Adjust width as needed */}
    //       <section className="hidden 2xl:block 2xl:w-1/4 bg-white p-4">
    //         <RightSection />
    //       </section>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col h-screen">
  <Navbar />

  <div className="flex flex-1 overflow-hidden">
    <aside className="bg-gray-100 xl:w-24 xl:p-4 overflow-auto">
      <Sidebar />
    </aside>

    <div className="flex h-full w-full overflow-hidden">
      <section className="hidden xl:block xl:w-1/4 bg-gray-100 p-4 border-r">
        <LeftSection />
      </section>

      {/* Middle Section - Takes full width when Right Section is hidden */}
      <section className="w-full xl:w-3/4 2xl:w-2/4 bg-gray-100 p-4 border-r">
        <MiddleSection />
      </section>

      {/* Right Section - Hidden on smaller screens, visible for 2xl and above */}
      <section className="hidden 2xl:block 2xl:w-1/4 bg-gray-100 p-4">
        <RightSection />
      </section>
    </div>
  </div>
</div>
  );
}

export default HomePage;
