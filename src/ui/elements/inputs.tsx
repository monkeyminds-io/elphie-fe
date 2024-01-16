// =============================================================================
// File Name: ui/elements/inputs.tsx
// File Description:
// This file contains the code of the React Input Components
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================

import { ChangeEventHandler } from "react"

// =============================================================================
// Components Props
// =============================================================================
type InputBlockPorps = {
    type?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    max?: number,
    name: string,
    label: string,
    placeholder: string,
    errors: string[] | undefined
}

type TextAreaBlockProps = {
    rows: number,
    name: string,
    label: string,
    placeholder: string,
    errors: string[] | undefined
}

type SelectBlockProps = {
    name: string,
    label: string,
    placeholder: string,
    options: string[],
    errors: string[] | undefined
}

type AppInputPorps = {
    type?: string,
    name: string,
    placeholder: string,
    max?: number,
    isUppercase?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    position?: string,
    defaultValue?: string,
    errors: string[] | undefined
}

type AppSelectPorps = {
    name: string,
    options: string[],
    defaultValue?: string,
    errors: string[] | undefined
}

// =============================================================================
// Component Functions
// =============================================================================
const setBorderStyle = (hasErrors: boolean) => {
    return hasErrors ? 'border-red-500' : 'border-gray-200';
}

// =============================================================================
// React Components
// =============================================================================
export const InputBlock = ({type = 'text', onChange = undefined, max, name, label, placeholder, errors}: InputBlockPorps) => {
    return (
        <div className="w-full">
            <label htmlFor={name} className="sr-only">{label}</label>

            {/* Input Wrapper */}
            <div className="relative">

                {/* Input */}
                <input 
                type={type} 
                name={name} 
                id={name}
                placeholder={placeholder}
                aria-describedby={`${name}-error`}
                onChange={typeof onChange !== 'undefined' ? onChange : () => {}}
                maxLength={max}
                className={`block p-[16px] w-full text-sm ${setBorderStyle(typeof errors !== 'undefined')} rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none`}/>
                
                {/* Error Icon */}
                {typeof errors !== 'undefined' ?
                    errors.length > 0 ? 
                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>
                        : ''
                    : ''
                }

            </div>

            {/* Errors Block */}
            <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
                {errors && errors.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
            </div>
            {/* End Errors Block */}

        </div>
    )
}

export const TextAreaBlock = ({rows, name, label, placeholder, errors}: TextAreaBlockProps) => {
    return (
        <div className="w-full">
            <label htmlFor={name} className="sr-only">{label}</label>

            {/* Input Wrapper */}
            <div className="relative">

                {/* Input */}
                <textarea 
                rows={rows} 
                name={name} 
                id={name}
                placeholder={placeholder}
                aria-describedby={`${name}-error`}
                className={`block p-[16px] w-full text-sm ${setBorderStyle(typeof errors !== 'undefined')} rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none`}>
                </textarea>
                
                {/* Error Icon */}
                {typeof errors !== 'undefined' ?
                    errors.length > 0 ? 
                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>
                        : ''
                    : ''
                }

            </div>

            {/* Errors Block */}
            <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
                {errors && errors.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
            </div>
            {/* End Errors Block */}

        </div>
    )
}

export const SelectBlock = ({name, label, placeholder, options, errors}: SelectBlockProps) => {
    return (
        <div className="w-full">
            <label htmlFor={name} className="sr-only">{label}</label>

            {/* Input Wrapper */}
            <div className="relative">

                {/* Input */}
                <select 
                name={name} 
                id={name}
                aria-describedby={`${name}-error`}
                className={`block p-[16px] w-full text-sm ${setBorderStyle(typeof errors !== 'undefined')} rounded-[16px] focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none`}>
                <option defaultValue={placeholder}>{placeholder}</option>
                    {options.map((option, index) => {
                        return <option value={option} key={index}>{option}</option>
                    })}
                </select>
                
                {/* Error Icon */}
                {typeof errors !== 'undefined' ?
                    errors.length > 0 ? 
                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>
                        : ''
                    : ''
                }

            </div>

            {/* Errors Block */}
            <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
                {errors && errors.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
            </div>
            {/* End Errors Block */}

        </div>
    )
}

export const AppInput = ({type = 'text', name, placeholder, max , isUppercase = false, onChange = undefined, position = '', defaultValue = '', errors}: AppInputPorps) => {
    return (
        <div className={`relative w-full`}>
            <input 
            type={type} 
            id={name} 
            name={name}
            aria-describedby={`${name}-error`}
            placeholder={placeholder}
            defaultValue={defaultValue}
            maxLength={max}
            onChange={onChange}
            className={`py-2 px-3 pe-11 block w-full border ${setBorderStyle(typeof errors !== 'undefined')} rounded-lg ${position === 'first' ? 'sm:rounded-l-lg sm:rounded-r-none' : ''} ${position === 'last' ? 'sm:rounded-l-none sm:rounded-r-lg' : ''} text-sm ${isUppercase ? 'uppercase' : ''} placeholder:text-gray-400 placeholder:normal-case focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none`}/>

            {/* Error Icon */}
            {<div className={`${typeof errors !== 'undefined' ? '' : 'hidden'} absolute top-2 end-0 flex items-center pointer-events-none pe-3`}>
                <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
            </div>}

            {/* Errors Block */}
            <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
                {errors && errors.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
            </div>
            {/* End Errors Block */}
        </div>
    )
}

export const AppSelect = ({ name, options, defaultValue = 'County', errors = undefined }: AppSelectPorps) => {
    return (
        <div className={`relative w-full`}>
            <select 
            id={name} 
            name={name}
            aria-describedby={`${name}-error`}
            defaultValue={defaultValue}
            className={`py-2 px-3 pe-11 block w-full border ${setBorderStyle(typeof errors !== 'undefined')} rounded-lg text-sm placeholder:text-gray-400 focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none`}>
                <option defaultValue={defaultValue}>{defaultValue}</option>
                {options.map((option, index) => {
                    return <option value={option} key={index}>{option}</option>
                })}
            </select>

            {/* Error Icon */}
            {<div className={`${typeof errors !== 'undefined' ? '' : 'hidden'} absolute top-2 end-0 flex items-center pointer-events-none pe-3`}>
                <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
            </div>}

            {/* Errors Block */}
            <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
                {errors && errors.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
            </div>
            {/* End Errors Block */}
        </div>
    )
}
