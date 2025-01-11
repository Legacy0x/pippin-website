'use client';

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
};

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <div>
      <div className="flex justify-center mt-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              bg-[#5A8C5B] text-white border border-[#ddd] px-6 py-3 rounded-t-lg cursor-pointer font-medium transition-colors whitespace-nowrap -mb-px mx-2
              ${activeTab === tab.id ? "bg-[#3a5a3d]" : "hover:bg-[#4e7a4f]"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border border-[#ddd] bg-white rounded-lg">
        <div className="animate-[fadeIn_0.3s_ease-in-out]">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
} 