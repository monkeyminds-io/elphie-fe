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
    isAbsolute: boolean,
    slides: ReactNode[],
    children: ReactNode,
}

type SlideProps = {
    children: ReactNode,
    styles?: string
}

// =============================================================================
// React Components
// =============================================================================
export const Slider = ({isAbsolute, slides, children}: SliderWrapperProps) => {
    return (
        <div data-hs-carousel='{"loadingClasses": "opacity-0"}' className={isAbsolute ? 'relative' : 'flex flex-col'}>
            {/* Slider */}
            <div className="hs-carousel p-1 relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
                {/* Slider Body */}
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    {slides.map((slide, index) => <Slide key={index}>{slide}</Slide>)}
                </div>
                {/* End Slider Body */}
            </div>
            {/* End Slider */}
            <div className={isAbsolute ? '' : 'flex justify-between items-center w-full'}>
                {children}
            </div>
        </div>
    )
}

export const Slide = ({children, styles = ''}: SlideProps) => {
    return (
        <div className={`hs-carousel-slide ${styles}`}>
            {children}
        </div>
    )
}

export const SliderPrev = ({isAbsolute}: {isAbsolute: boolean}) => {
    return (
        <button type="button" className={
            isAbsolute ? 
            'hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]' 
            : 'hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none group flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-indigo-500 transition duration-[320ms] ease-in-out'
        }>
            {
            isAbsolute ? 
                (<span className="text-2xl" aria-hidden="true">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </span>)
              : (<span className="text-2xl" aria-hidden="true">
                    <svg className='w-[16px] transition duration-[320ms] ease-in-out group-hover:-translate-x-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
                    </svg>
                </span>)
            }
            <span className={isAbsolute ? 'sr-only' : ''}>Previous</span>
        </button>
    )
}

export const SliderNext = ({isAbsolute}: {isAbsolute: boolean}) => {
    return (
        <button type="button" className={
            isAbsolute ? 
            'hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]'
            : 'hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none group inline-flex items-center justify-center gap-x-2 py-[8px] px-[16px] text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[12px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%]'
        }>
            <span className={isAbsolute ? 'sr-only' : ''}>Next</span>
            {
            isAbsolute ? 
                (<span className="text-2xl" aria-hidden="true">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>)
              : (<span className="text-2xl" aria-hidden="true">
                    <svg className='w-[16px] transition duration-[320ms] ease-in-out group-hover:translate-x-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                </span>)
            }
            
        </button>
    )
}

export const SliderDotsWrapper = ({isAbsolute, children}: {isAbsolute: boolean, children: ReactNode }) => {
    return (
        <div className={
            isAbsolute ? 
                'hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2'
                : 'hs-carousel-pagination flex justify-center space-x-2'}>
            {children}
        </div>
    )
}

export const SliderDot = () => {
    return <span className="hs-carousel-active:bg-indigo-500 hs-carousel-active:border-indigo-300 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
}