// =============================================================================
// File Name: libs/endpoints.ts
// File Description:
// This file contains all the API endpoints
// =============================================================================
// =============================================================================
// Global Variables
// =============================================================================
const MAIN_API = 'http://localhost:8000';

// =============================================================================
// Users Service Endpoints
// =============================================================================
export const createUser = () => `${MAIN_API}/users/create`;
export const getUserByEmail = (email: string) => `${MAIN_API}/users/get?email=${email}`;

export const createBilling = () => `${MAIN_API}/users/billing/create`;

// =============================================================================
// Emailer Service Endpoints
// =============================================================================
export const sendEmail = () => `${MAIN_API}/emailer/send`;