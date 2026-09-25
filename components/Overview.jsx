'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
  <section id="overview" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FDFBF7' }}>
    <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
      
      <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-tight uppercase tracking-wider text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '6px' }}>Brigade WTC Devanahalli</h2>
        <div className="flex items-center justify-start mt-1 mb-3">
          <div className="w-16 h-[1px] bg-[#B88A44]"></div>
          <div className="w-2 h-2 rounded-full bg-[#B88A44] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#B88A44]"></div>
        </div>
        <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-wide text-gray-600" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>KIADB Phase 2 Devanahalli North Bengaluru's</h3>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        
        <div className="w-full lg:w-[60%] xl:w-7/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000">
          <div 
            className="relative p-6 sm:p-7 xl:p-8 rounded-2xl shadow-[0_12px_36px_rgba(65,32,17,0.22)] overflow-hidden flex-1 flex flex-col justify-between" 
            style={{ background: '#412011' }}
          >
            <div>
              <p className="text-[15.5px] font-['Poppins',_sans-serif] text-[#E5EDDC] text-left md:text-justify leading-[1.85] m-0">
                <span 
                  style={{ 
                    float: 'left', 
                    fontSize: '3.6rem', 
                    lineHeight: '0.8', 
                    fontWeight: '800', 
                    color: '#B88A44', 
                    marginRight: '12px', 
                    marginTop: '4px',
                    fontFamily: "var(--font-jost), Montserrat, sans-serif" 
                  }}
                >
                  B
                </span>
                <span style={{ fontWeight: '700', color: '#FFFFFF' }}>rigade WTC Devanahalli</span> is a new mixed-use township by Brigade Group, one of India&apos;s most respected developers. Spread across 75 acres at Devanahalli Aerospace Park Phase 2, Haraluru, Bengaluru Rural, this project is designed to be a self-contained community in North Bengaluru. It will feature approximately 7,195 residential units across 16 blocks, with towers rising up to G+30 floors.
                <span className={`md:hidden ${!isExpanded ? 'inline' : 'hidden'}`}>... </span>
                
                <span className={`md:inline ${isExpanded ? 'inline' : 'hidden'}`}>
                  <span className="block mt-3">
                    Brigade WTC Devanahalli is planned as a complete township where daily life feels effortless. Residents will have access to a wide range of modern amenities designed for fitness, relaxation, and community bonding. From a grand clubhouse and swimming pool to landscaped gardens and children&apos;s play zones, every detail is crafted for comfort.
                  </span>
                </span>

                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  type="button"
                  className="md:hidden text-[#B88A44] hover:text-[#D4A762] font-bold inline-flex items-center gap-1 transition-colors cursor-pointer mt-2 select-none focus:outline-none"
                  style={{ fontSize: '15px' }}
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4 mt-6 sm:mt-8 pt-6 border-t border-[#B88A44]/30 max-w-[500px] mx-auto w-full">
              
              <div className="flex items-center justify-center gap-2.5 xl:gap-3 px-3.5 py-3 xl:px-4 xl:py-3.5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow min-w-0">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 xl:w-7 xl:h-7 text-[#B88A44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c-4.97-4.97-8-8.58-8-12a8 8 0 1 1 16 0c0 3.42-3.03 7.03-8 12z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[14px] sm:text-[13px] md:text-[14.5px] lg:text-[13.5px] xl:text-[15.5px] 2xl:text-[17px] font-bold text-[#412011] leading-tight uppercase whitespace-nowrap">
                    75 Acres
                  </span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[10px] sm:text-[9.5px] md:text-[10px] xl:text-[11px] text-gray-500 font-bold leading-tight mt-0.5 uppercase tracking-wide">
                    Total Project Area
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2.5 xl:gap-3 px-3.5 py-3 xl:px-4 xl:py-3.5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow min-w-0">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 xl:w-7 xl:h-7 text-[#B88A44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                    <path d="M9 8h2" />
                    <path d="M13 8h2" />
                    <path d="M9 12h2" />
                    <path d="M13 12h2" />
                    <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[14px] sm:text-[13px] md:text-[14.5px] lg:text-[13.5px] xl:text-[15.5px] 2xl:text-[17px] font-bold text-[#412011] leading-tight uppercase whitespace-nowrap">
                    16 Blocks
                  </span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[10px] sm:text-[9.5px] md:text-[10px] xl:text-[11px] text-gray-500 font-bold leading-tight mt-0.5 uppercase tracking-wide">
                    G+30 Floors
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] xl:w-5/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative overflow-hidden rounded-2xl shadow-lg border border-[#B88A44]/30 bg-white flex-1 min-h-[380px] sm:min-h-[480px]">
            <Image
              src={overviewImage}
              alt="Brigade WTC Devanahalli - Tower Elevation"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              priority={true}
            />
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Overview
