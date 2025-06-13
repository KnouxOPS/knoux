"use client"

import React from 'react';
import { Card } from "../components/ui/card";

const DashboardPage: React.FC = () => {
  const stats = [
    { label: 'الخدمات النشطة', value: '5' },
    { label: 'حالة النظام', value: 'مستقر' },
    { label: 'الأداء', value: '95%' },
    { label: 'المراقبة', value: 'نشطة' }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">لوحة التحكم</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">نظرة عامة على النظام</h2>
          <div className="space-y-4">
            <div className="h-8 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black dark:bg-white transition-all duration-500"
                style={{ width: '75%' }}
              />
            </div>
            <div className="h-8 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black dark:bg-white transition-all duration-500"
                style={{ width: '60%' }}
              />
            </div>
            <div className="h-8 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black dark:bg-white transition-all duration-500"
                style={{ width: '90%' }}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
