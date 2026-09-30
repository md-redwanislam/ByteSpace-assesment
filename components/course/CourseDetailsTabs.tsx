"use client";

import { useState } from "react";

import Description from "./Description";
import DetailsButton from "./DetailsButton";
import Lessons from "./Lessons";
import Reviews from "./Reviews";

type Tab = "about" | "lessons" | "reviews";

export default function CourseDetailsTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <div className="flex w-[725px] flex-col bg-white items-start gap-10">
      <DetailsButton activeTab={activeTab} onChange={setActiveTab} />

      <div className="flex w-full flex-col items-start gap-6">
        {activeTab === "about" && <Description />}

        {activeTab === "lessons" && (
          <div className="w-full">
            {" "}
            <Lessons />{" "}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="w-full">
            {" "}
            <Reviews />{" "}
          </div>
        )}
      </div>
    </div>
  );
}
