// =============================================================================
// File Name: ui/elements/inputs.tsx
// File Description:
// This file contains the code of the React Input Components
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================

// =============================================================================
// Components Props
// =============================================================================
type InputBlockPorps = {
    rows?: number,
    type?: string,
    name: string,
    label: string,
    placeholder: string,
    errors: string[] | undefined
}

// =============================================================================
// React Components
// =============================================================================
export const InputBlock = ({type = 'text', name, label, placeholder, errors}: InputBlockPorps) => {
    const errorsLength = () : number => {
        return typeof errors !== 'undefined' ? errors.length : 0
    }
    return (
        <div>
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
                className="block p-[16px] w-full text-sm border-gray-200 rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"/>
                
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

export const TextAreaBlock = ({rows = 4, name, label, placeholder, errors}: InputBlockPorps) => {
    return (
        <div>
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
                className="block p-[16px] w-full text-sm border-gray-200 rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none">
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