'use client'
import { cardcount } from '@/constant/CardCount';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const CardsCount = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {cardcount.map((item, i) => (
        <motion.div
          key={i}
          className="shadow-xl p-4 rounded-lg bg-white h-[140px] flex flex-col justify-between border-2 border-blue-200"
          initial={{ opacity: 0, y: 20 }}      
          animate={{ opacity: 1, y: 0 }}       
          transition={{ duration: 0.5, delay: i * 0.1 }} 
        >
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image src={item.image} width={23} height={23} alt={item.title} />
              <div>
                <h1 className="text-md font-medium">{item.title}</h1>
                <p className="text-gray-300 text-sm">{item.subtitle}</p>
              </div>
            </div>
            <p className="text-black font-semibold">{item.count}</p>
          </div>

          <Image src={item.wave} width={405} height={23} alt="graph" />
        </motion.div>
      ))}
    </div>
  );
};

export default CardsCount;
