'use server'
// =============================================================================
// File Name: libs/cookies.ts
// File Description:
// This file contains the code to manage (CRUD) cookies
// =============================================================================

// =============================================================================
// Cookies Imports
// =============================================================================
import { cookies } from 'next/headers';

// =============================================================================
// Cookies Global Variables
// =============================================================================
const cookieStore = cookies();

// =============================================================================
// Cookies Functions
// =============================================================================
export const setCookie = (key: string, value: string) => {
    cookieStore.set(key, value);
}

export const getCookie = (key: string) => {
    return cookieStore.get(key);
}

export const getAll = () => {
    return cookieStore.getAll();
}

export const removeCookie = (key: string) => {
    cookieStore.set(key, '');
}
