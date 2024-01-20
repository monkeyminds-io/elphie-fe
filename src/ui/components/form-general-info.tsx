'use client'

// =============================================================================
// File Name: ui/components/form-general-inco.tsx
// File Description:
// This file contains the code for the React Component Form General Information
// of the My Account Page in the Application part of the project.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ChangeEvent, MouseEvent } from "react";
import { useFormState } from "react-dom";
import { useSearchParams } from "next/navigation";
import { AppInput } from "../elements/inputs"
import { updateUser } from "@/libs/actions/update-user";
import { User } from "@/libs/definitions";

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormGeneralInfo = ({user}: {user: User}) => {

    // Set success message
    const searchParams = useSearchParams();
    const success = searchParams.get('success') || false;
    
    // LOCAL VARIABLES ////////////////
    const userFullname = `${user.firstName} ${user.lastName}`;

    // EVENT HANDLERS ////////////////
    /**
     * Used to handle the on click event of the Upload Photo button
     */
    const handleUploadFileClick = () => {
        const input: HTMLInputElement | null = document?.querySelector('#avatar-upload');
        input?.click();
    }

    /**
     * Used to handle the on change event of the Upload Photo input
     * @param {ChangeEvent<HTMLInputElement>} event 
     */
    const handleUploadFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const imageWrapper: HTMLDivElement | null = document.querySelector('#profile-image-wrapper');
        const { files } = event.target;
        if(files && files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if(e.target !== null && e.target.result !== null && imageWrapper !== null) {
                    imageWrapper.innerHTML = '';
                    const image = document.createElement("img");
                    image.src = e.target.result.toString();
                    image.alt = `${userFullname} avatar`;
                    image.id = 'new-profile-image';
                    imageWrapper.appendChild(image);
                }
            }
            reader.readAsDataURL(files[0]);
        }
    }

    // TODO Add to Cancel Button component
    /**
     * Used to handle on click event of the cancel button
     */
    const handleCancel = (event: MouseEvent) => {
        // Default
        event.preventDefault();
        const form: HTMLFormElement | null = document?.querySelector('#form-general-info');
        if(form !== null) form.reset();
        // Callback
        const imageWrapper: HTMLDivElement | null = document?.querySelector('#profile-image-wrapper');
        if(imageWrapper !== null) {
            const image: HTMLImageElement | null = imageWrapper.querySelector('#new-profile-image');
            if(image !== null) {
                imageWrapper.removeChild(image);
                imageWrapper.innerHTML = user.firstName.substring(0, 1) + user.lastName.substring(0, 1);
            }
        }
    }

    // Data Validation object that will receive any errors on Submit in form of messages.
    const initialState = { errors: {}, message: null! };

    // Adding the user Id to the updateUser action
    const updateUserWithId = updateUser.bind(null, user.id);

    /**
     * Using the React function useFormState we can pass the function that is responsible for the actual action of the form
     * and an initial state objet to receove the potential errors on submit.
     * Using JavaScript / TypeScript destructuring we create 2 elements:
     *    1 -> The state variable that will contain the potential errors
     *    2 -> The dispatch method / function that points at the actual action function
     */
    const [state, dispatch] = useFormState(updateUserWithId, initialState);

    return (
        // TODO Create AppForm component
        <form id="form-general-info" action={dispatch}>

            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-4 sm:gap-6">

                <div className="sm:col-span-3">
                    <label className="inline-block text-sm text-gray-800 mt-2.5">
                        Profile photo
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="flex items-center gap-5">

                        {/* Profile Image */}
                        <div id="profile-image-wrapper" className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-indigo-200 text-2xl font-semibold text-indigo-800 leading-none overflow-hidden">
                            {user.firstName.substring(0, 1) + user.lastName.substring(0, 1)}
                        </div>

                        {/* Upload Photo Button */}
                        <div className="flex gap-x-2">
                            <button type="button" id="upload-file-button" onClick={handleUploadFileClick}
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                                Upload photo
                                <input type="file" id="avatar-upload" name="avatar-upload" accept="image/*" className="hidden" onChange={handleUploadFileChange}/>
                            </button>
                        </div>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="firstname" className="inline-block text-sm text-gray-800 mt-2.5">
                        Full name
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                        <AppInput name={"firstname"} placeholder={"First Name"} errors={state?.errors?.firstname} position={'first'} defaultValue={user.firstName}/>
                        <AppInput name={"lastname"} placeholder={"Last Name"} errors={state?.errors?.lastname} position={'last'} defaultValue={user.lastName}/>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="email" className="inline-block text-sm text-gray-800 mt-2.5">
                        Email
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <AppInput name={"email"} placeholder={"Email address"} errors={state?.errors?.email} type={'email'} defaultValue={user.email}/>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="currentPassword" className="inline-block text-sm text-gray-800 mt-2.5">
                        Password
                    </label>
                </div>
                {/* End Col */}

                {/* TODO Create Inputs Wrapper for App Form Main */}
                <div className="sm:col-span-9">
                    <div className="space-y-2">
                        <AppInput name={"currentPassword"} placeholder={"Enter current password"} errors={state?.errors?.currentPassword} type={'password'}/>
                        <AppInput name={"newPassword"} placeholder={"Enter new password"} errors={state?.errors?.newPassword} type={'password'}/>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="accountType" className="inline-block text-sm text-gray-800 mt-2.5">
                        Upgrade account
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2">
                        <label htmlFor="calphie-plan"  className="flex rounded-lg shadow-sm cursor-pointer">
                            <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500">
                                <input type="radio" id="calphie-plan" name="accountType" value='calphie' defaultChecked={user.accountType === 'calphie' ? true : false}
                                className="shrink-0 border-gray-200 rounded-full text-indigo-600 focus:ring-indigo-500"/>
                            </span>
                            <div className="flex flex-row justify-between py-3 px-4 pe-11 w-full border border-gray-200 shadow-sm rounded-e-lg text-sm">
                                <span>Calphie plan</span>
                                <span>FREE</span>
                            </div>
                        </label>
                        <label htmlFor="elphie-plan"  className="flex rounded-lg shadow-sm  cursor-pointer">
                            <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500">
                                <input type="radio"  id="elphie-plan" name="accountType" value='elphie' defaultChecked={user.accountType === 'elphie' ? true : false}
                                className="shrink-0 border-gray-200 rounded-full text-indigo-600 focus:ring-indigo-500"/>
                            </span>
                            <div className="flex flex-row justify-between py-3 px-4 pe-11 w-full border border-gray-200 shadow-sm rounded-e-lg text-sm">
                                <span>Elphie plan</span>
                                <span>€ 9,99 <span className='text-xs text-gray-400'>/month</span></span>
                            </div>
                        </label>

                        {/* Errors Block */}
                        <div id={`accountType-error`} aria-live="polite" aria-atomic="true">
                            {state?.errors?.accountType && 
                            state?.errors?.accountType.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
                        </div>
                        {/* End Errors Block */}
                    </div>
                </div>
                {/* End Col */}
                
            </div>
            {/* End Grid */}

            <div className="mt-5 flex justify-end gap-x-2">
            
                {/* Success Block */}
                {/* TODO Make this to show in a conditional manner */}
                {/* TODO Message to be a property for App Form main component */}
                <div aria-live="polite" aria-atomic="true">
                    {success && <p className="mt-2 text-sm text-green-500">Changes saved successfully!!</p>}
                </div>
                {/* End Success Block */}

                {/* Errors Block */}
                <div aria-live="polite" aria-atomic="true">
                    {state?.message && <p className="mt-2 text-sm text-red-500">{state.message}</p>}
                </div>
                {/* End Errors Block */}

                {/* Cancel Button */}
                {/* TODO Create component */}
                <button type="button" id="cancel-button" onClick={(e) => handleCancel(e)}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                Cancel
                </button>

                {/* Submit Button */}
                {/* TODO Create component */}
                <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                Save changes
                </button>
            </div>
        </form>
    )
}