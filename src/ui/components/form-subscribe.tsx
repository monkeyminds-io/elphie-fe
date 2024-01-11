'use client'
// =============================================================================
// File Name: ui/components/form-subscribe.tsx
// File Description:
// This file contains the code of the Subscribe Form in the Website Footer.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { useFormState } from "react-dom"
import { handlingSubscriber } from "@/libs/actions/subscribe";

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormSubscribe = () => {

    // Validation object
    const initialState = { errors: {}, message: null!, success: null! }

    // Form Action and Error handling
    const [state, dispatch] = useFormState(handlingSubscriber, initialState);

    return (
        <form id='form-subscribe' action={dispatch}>

            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-[16px] p-2">
                <div className="w-full relative">
                    <label htmlFor="subscriberEmail" className="sr-only">Subscribe</label>
                    <input type="text" id="subscriberEmail" name="subscriberEmail" aria-describedby="subscriberEmail-error" className="py-3 px-4 block w-full border-transparent rounded-[8px] text-sm focus:border-blue-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter your email"/>
                    {/* Error Icon */}
                    {state?.errors?.subscriberEmail ? 
                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>
                        : ''
                    }
                </div>

                <button type="submit"
                className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-white text-xs uppercase font-semibold rounded-[12px] bg-indigo-600 hover:bg-indigo-500 transition-colors duration-[320ms] ease-in-out disabled:opacity-50 disabled:pointer-events-none">
                    Subscribe
                </button>

            </div>

            {/* Errors Block */}
            <div id='subscriberEmail-error' aria-live="polite" aria-atomic="true">
                {state?.errors?.subscriberEmail && state?.errors?.subscriberEmail.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
            </div>
            {/* End Errors Block */}

            {/* Success Block */}
            <div>
                {state?.success && <p className="mt-2 text-sm text-green-500">{state?.success}</p>}
            </div>
            {/* End Success Block */}

            <p className="mt-3 text-sm text-gray-200">
                New feature releases or big discounts. Never spam 😇
            </p>

        </form>
    )
}