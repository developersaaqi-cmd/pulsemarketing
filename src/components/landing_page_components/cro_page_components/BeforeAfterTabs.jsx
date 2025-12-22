"use client";
import { useState } from "react";

const tabData = [
  {
    id: "tab01",
    image: "/cro-01.jpg",
    label: "Result 01",
  },
  {
    id: "tab02",
    image: "/cro-02.jpg",
    label: "Result 02",
  },
  {
    id: "tab03",
    image: "/cro-03.jpg",
    label: "Result 03",
  },
];

export default function BeforeAfterTabs() {
  const [activeTab, setActiveTab] = useState("tab01");

  return (
    <section id="tabs-before-wrapper">
      <div className="inner-wrapper-ct">
        <div className="heading-wrapper" id="center">
          <h3>Before & After</h3>
        </div>

        <section id="before-after-tabs">
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`tab-content ${activeTab === tab.id ? "active" : ""}`}
              id={tab.id}
            >
              <div className="box__inner">
                <img src={tab.image} alt="" />
              </div>
            </div>
          ))}
        </section>

        <div className="tabs-nav">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
