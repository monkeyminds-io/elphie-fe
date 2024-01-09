// =============================================================================
// File Name: libs/utiles.ts
// File Description:
// This file contains some handy functions.
// =============================================================================
// =============================================================================
// Utiles Imports
// =============================================================================
import { ChangeEvent } from "react";

// =============================================================================
// Utiles Variables
// =============================================================================
export const regexps = {
    eircode: '/^[ACDEFHKNPRTVWXY]{1}[0-9]{1}[ACDEFHKNPRTVWXY0-9]{1}[ ]{1}[ACDEFHKNPRTVWXY0-9]{4}$/',
    cardNumber: '/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/',
    cardExpiry: '/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/',
    cardCVV: '/^[0-9]{3,4}$/',
    password: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
}
// =============================================================================
// Utiles Functions
// =============================================================================
export const formatEircodeInput : Function = (event : ChangeEvent<HTMLInputElement>): void => {
    const input : HTMLInputElement | null = event.target;
    const value : string = input.value;
    if(value.length === 3) input.value = value + " ";
}

/**
 * Used to format the value of a Credit Card Number field
 * @param {ChangeEvent<HTMLInputElement>} event 
 */
export const formatCardNumberInput : Function = (event : ChangeEvent<HTMLInputElement>): void => {
    const input : HTMLInputElement | null = event.target;
    const value : string = input.value;
    if(value.length === 4 || value.length === 9 || value.length === 14) input.value = value + " ";
}

/**
 * Used to format the value of a, Expiry Date field
 * @param {ChangeEvent<HTMLInputElement>} event 
 */
export const formatCardExpiryInput : Function = (event : ChangeEvent<HTMLInputElement>): void => {
    const input : HTMLInputElement | null = event.target;
    const value : string = input.value;
    if(value.length === 2)  input.value = value + " / ";
}