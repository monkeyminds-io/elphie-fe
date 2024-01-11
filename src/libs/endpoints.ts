// =============================================================================
// File Name: libs/endpoints.ts
// File Description:
// This file contains all the API endpoints
// =============================================================================
// =============================================================================
// Global Variables
// =============================================================================
const MAIN_API = process.env.API_DOMAIN;

// =============================================================================
// Users Service Endpoints
// =============================================================================
export const createUser = () => `${MAIN_API}/users/create`;
export const getUserByEmail = (email: string) => `${MAIN_API}/users/get?email=${email}`;
export const updateUserPassword = (id: string) => `${MAIN_API}/users/update/${id}/password`;

export const createBilling = () => `${MAIN_API}/users/billing/create`;