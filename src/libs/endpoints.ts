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
// Users Endpoints
export const createUser = () => `${MAIN_API}/users/create`;
export const getUserById = (id: string) => `${MAIN_API}/users/get?id=${id}`;
export const getUserByEmail = (email: string) => `${MAIN_API}/users/get?email=${email}`;
export const updateUserPassword = (id: string) => `${MAIN_API}/users/${id}/update/password`;
export const updateUser = (id: string) => `${MAIN_API}/users/${id}/update`;
export const deleteUser = (id: string) => `${MAIN_API}/users/${id}/delete`;

// Billing Info Endopoits
export const createBilling = () => `${MAIN_API}/users/billing/create`;
export const getBillingInfoByUserId = (userId: string) => `${MAIN_API}/users/billing/get?userId=${userId}`;
export const updateBilling = (id: string) => `${MAIN_API}/users/billing/${id}/update`;
export const deleteBilling = (id: string) => `${MAIN_API}/users/billing/${id}/delete`;

// =============================================================================
// Savings Service Endpoints
// =============================================================================
export const getSavingsPages = (userId: number, name: string, rowsPerPage: number) => `${MAIN_API}/savings/get?userId=${userId}&name=${name}&rowsPerPage=${rowsPerPage}`;
export const getFilteredSavingsByUserId = (userId: number, name: string) => `${MAIN_API}/savings/get?userId=${userId}&name=${name}`;