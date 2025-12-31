import React, { useState, useCallback } from 'react';
import { ceoData, teamMembers } from '../../data/content';
import { Crown } from 'lucide-react';

/* ------------------ CONSTANTS ------------------ */
const DEPARTMENT_COLORS = {
  Operations: 'bg-blue-100 text-blue-700',
  Quality: 'bg-green-100 text-green-700',
  Sales: 'bg-purple-100 text-purple-700',
  Logistics: 'bg-orange-100 text-orange-700',
};

const getDepartmentColor = (dept) =>
  DEPARTMENT_COLORS[dept] || 'bg-gray-100 text-gray-700';

/* ------------------ COMPONENT ------------------ */
const CEOAndTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleHover = useCallback((id) => setHoveredMember(id), []);
  const handleLeave = useCallback(() => setHoveredMember(null), []);

  return (
    <section className="section-padding bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-100/50 rounded-full blur-3xl" />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
          <span className="w-2 h-2 bg-primary-500 rounded-full" />
          <span className="text-sm font-semibold uppercase tracking-wider">
            Our Team
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
          Meet the People
          <span className="block gradient-text">Behind Our Success</span>
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our dedicated team of experts brings together decades of experience in
          agriculture, international trade, and quality management.
        </p>
      </div>

      {/* ------------------ CEO SECTION ------------------ */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-primary-200">
          <div className="h-2 bg-linear-to-r from-primary-500 via-green-400 to-secondary-400" />

          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-2/5 p-10 text-center relative">
              <div className="absolute top-4 left-4 bg-linear-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full shadow-lg">
                <div className='flex justify-center gap-2'>
                  <Crown /> CEO
                </div>
              </div>

              <div className="mx-auto w-72 h-72 rounded-full overflow-hidden border-4 border-primary-400 shadow-xl">
                <img
                  src={ceoData.image}
                  alt={ceoData.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">{ceoData.name}</h3>
              <p className="text-primary-600 font-semibold">
                {ceoData.designation}
              </p>
            </div>

            {/* Message */}
            <div className="lg:w-3/5 p-10 bg-linear-to-br from-stone-50 to-primary-50/50">
              <blockquote className="text-stone-700 text-lg whitespace-pre-line">
                {ceoData.message}
              </blockquote>

              <div className="mt-8 pt-6 border-t border-primary-200">
                <p className="font-script text-3xl text-primary-700 italic">
                  {ceoData.name}
                </p>
                <p className="text-stone-500 text-sm">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ TEAM GRID ------------------ */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-6 mb-16
                grid-cols-[repeat(auto-fit,minmax(240px,1fr))]
                justify-items-center">
          {teamMembers.map((member) => {
            const isHovered = hoveredMember === member.id;

            return (
              <div
                key={member.id}
                onMouseEnter={() => handleHover(member.id)}
                onMouseLeave={handleLeave}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500
                ${isHovered ? 'shadow-2xl scale-105 -translate-y-2' : ''}`}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-md text-stone-800">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 text-sm font-medium">
                    {member.designation}
                  </p>
                </div>

                <div className="h-1 bg-linear-to-r from-primary-400 to-primary-600 scale-x-0 hover:scale-x-100 transition-transform origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CEOAndTeam;
