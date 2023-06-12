"use client";
import React, { use, useState } from "react";

interface LifeEvent {
  year: number;
  description: string;
}

interface LifeEventsProps {
  events: LifeEvent[];
}

const LifeEvents: React.FC<LifeEventsProps> = ({ events }) => {
  const [activeEvent, setActiveEvent] = useState<LifeEvent | null>(null);

  return (
    <div className="relative m-8">
      <div className="absolute h-full top-0" />

      <div className="absolute h-full border-r-4 border-gray-500"></div>
      <div className="ml-8 absolute h-full border-r-4 border-gray-500"></div>

      {events.map((event, idx) => (
        <div className="relative mt-10 ml-20" key={idx}>
          <div
            className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-500/70 text-white"
            onMouseEnter={() => setActiveEvent(event)}
            onMouseLeave={() => setActiveEvent(null)}
          >
            {event.year}
          </div>
          {activeEvent === event && (
            <div className="ml-14 absolute bg-white p-6 shadow-lg border-black rounded w-64">
              <p>{event.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LifeEvents;
