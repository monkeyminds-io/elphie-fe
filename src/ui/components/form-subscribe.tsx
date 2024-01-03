// =============================================================================
// File Name: ui/components/form-subscribe.tsx
// File Description:
// This file contains the code of the Subscribe Form in the Website Footer.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormSubscribe = () => {
    return (
        // TODO Set Action for Form Submit
        <form>
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-[16px] p-2">
                <div className="w-full">
                    <label htmlFor="subscribe-input" className="sr-only">Subscribe</label>
                    <input type="text" id="subscribe-input" name="subscribe-input" className="py-3 px-4 block w-full border-transparent rounded-[8px] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter your email"/>
                </div>
                <button className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-white text-xs uppercase font-semibold rounded-[12px] bg-indigo-600 hover:bg-indigo-500 transition-colors duration-[320ms] ease-in-out disabled:opacity-50 disabled:pointer-events-none" type="submit">
                    Subscribe
                </button>
            </div>
            <p className="mt-3 text-sm text-gray-200">
                New feature releases or big discounts. Never spam 😇
            </p>
        </form>
    )
}