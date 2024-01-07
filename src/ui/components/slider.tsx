// =============================================================================
// File Name: ui/components/sliders.tsx
// File Description:
// This file contains the code of the React Components Slider
// and its Sub Components.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from 'react'

// =============================================================================
// Components Props
// =============================================================================
type SliderWrapperProps = {
    slides: ReactNode[],
    hiddenSlides?: number[],
    children: ReactNode,
}

type SlideProps = {
    children: ReactNode,
    isHidden?: boolean,
}

type SliderDotsWrapperProps = {
    children: ReactNode,
}
''
// =============================================================================
// React Components
// =============================================================================
export const Slider = ({slides, hiddenSlides = [], children}: SliderWrapperProps) => {
    return (
        <div data-hs-carousel='{"loadingClasses": "opacity-0"}' className='flex flex-col md:flex-col-reverse'>

            {/* Slider Navigation */}
            <div className='flex justify-between items-center w-full'>
                {children}
            </div>
            {/* End slider Navigation */}

            {/* Slider */}
            <div className="hs-carousel mt-8 relative overflow-hidden w-full min-h-[680px] md:min-h-[340px] bg-white rounded-lg">

                {/* Slider Body */}
                <div className="hs-carousel-body flex flex-nowrap absolute top-0 bottom-0 start-0 overflow-hidden transition-transform duration-700 opacity-0">
                    {slides.map((slide, index) => <Slide key={index} isHidden={hiddenSlides.includes(index)}>{slide}</Slide>)}
                </div>
                {/* End Slider Body */}

            </div>
            {/* End Slider */}

        </div>
    )
}

export const Slide = ({children, isHidden = false}: SlideProps) => {
    return (
        <div className={`hs-carousel-slide ${isHidden ? 'hidden': ''}`}>
            {children}
        </div>
    )
}

export const SliderPrev = () => {
    return (
        <button type="button" className='hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none group flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-indigo-500 transition duration-[320ms] ease-in-out'>
            <span className="text-2xl" aria-hidden="true">
                <svg className='w-[16px] transition duration-[320ms] ease-in-out group-hover:-translate-x-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
                </svg>
            </span>
            <span>Previous</span>
        </button>
    )
}

export const SliderNext = () => {
    return (
        <button type="button" className='hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none group inline-flex items-center justify-center gap-x-2 py-[8px] px-[16px] text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[12px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%]'>
            <span>Next</span>
            <span className="text-2xl" aria-hidden="true">
                <svg className='w-[16px] transition duration-[320ms] ease-in-out group-hover:translate-x-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
            </span>
        </button>
    )
}

export const SliderDotsWrapper = ({children}: SliderDotsWrapperProps) => {
    return (
        <div className='hs-carousel-pagination hidden sm:flex justify-center space-x-2'>
            {children}
        </div>
    )
}

export const SliderDot = ({isHidden = false}: {isHidden: boolean}) => {
    return <span className={`hs-carousel-active:bg-indigo-500 hs-carousel-active:border-indigo-300 ${isHidden ? 'hidden': ''} w-3 h-3 border border-gray-400 rounded-full cursor-pointer`}></span>
}