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
  const [key, setKey] = useState(0);

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap justify-center sm:gap-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setKey(prev => prev + 1);
            }}
            className={`
              text-white px-6 py-3 rounded-lg sm:rounded-none sm:rounded-t-lg cursor-pointer font-medium transition-colors whitespace-nowrap focus:outline-none sm:ml-0.5 first:sm:ml-0
              ${activeTab === tab.id 
                ? "bg-[#3a5a3d] sm:border-t sm:border-x border-[#3a5a3d]" 
                : "bg-[#5A8C5B] hover:bg-[#4e7a4f] sm:border-t sm:border-x border-[#5A8C5B] hover:border-[#4e7a4f]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border border-[#ddd] bg-white rounded-lg mt-2 sm:mt-0">
        <div key={key} className="animate-fadeIn">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
} 