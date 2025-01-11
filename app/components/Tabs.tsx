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
      <div className="flex justify-center mt-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setKey(prev => prev + 1);
            }}
            className={`
              text-white border border-[#ddd] px-6 py-3 rounded-t-lg cursor-pointer font-medium transition-colors whitespace-nowrap -mb-px
              ${activeTab === tab.id 
                ? "bg-[#3a5a3d] border-b-[#f5f7e9]" 
                : "bg-[#5A8C5B] hover:bg-[#4e7a4f]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 border border-[#ddd] bg-white rounded-lg">
        <div key={key} className="animate-fadeIn">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
} 