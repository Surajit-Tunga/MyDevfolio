import React from 'react';
import { journeyData } from './constant/index';

const Blog = () => {
  return (
    <div className="mx-3 my-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">My Journey Blog</h2>

      <div className="space-y-10">
        {journeyData.map((event, index) => (
          <div key={index} className="text-blue-600">
            {/* Facebook-style Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{event.eventName}</h3>

            {/* Caption */}
            <div className="text-sm text-gray-400 mb-3 leading-relaxed">
              <p>
                On <span className="font-medium text-gray-300">{event.date}</span>, I attended{" "}
                <span className="font-medium text-gray-300">{event.eventName}</span> organized by{" "}
                <span className="font-medium text-gray-300">{event.organizedBy}</span>.
              </p>
              <p>
                Here my role was <span className="font-medium text-gray-300">{event.role}</span>.
              </p>
              <p>
                Position: <span className="font-medium text-gray-300">{event.position}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-3">{event.description}</p>

            {/* Horizontally scrollable image gallery */}
            {event.images?.length > 0 && (
              <div className="flex overflow-x-auto space-x-3 scroll-hidden">
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Event ${index + 1} img ${i + 1}`}
                    className="h-40 sm:h-32 w-auto rounded-lg object-cover flex-shrink-0"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
