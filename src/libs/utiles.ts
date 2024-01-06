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