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
// Cookies Types
// =============================================================================
type CookieSettingOptions = {
    name: string,
    value: string,
    httpOnly?: boolean,
    path?: string,
    expiry?: number,
}

// =============================================================================
// Cookies Global Variables
// =============================================================================
const cookieStore = cookies();

// =============================================================================
// Cookies Functions
// =============================================================================
export const set = ({name, value, httpOnly = true, path = '/'}: CookieSettingOptions) => {
    cookieStore.set(name, value, {
        httpOnly: httpOnly,
        path: path,
        maxAge: 86700
    });
}

export const get = (key: string) => {
    return cookieStore.get(key);
}

export const getAll = () => {
    return cookieStore.getAll();
}

export const remove = (key: string) => {
    cookieStore.set(key, '', {
        httpOnly: true,
        path: '/',
        maxAge: -1
    });
}
