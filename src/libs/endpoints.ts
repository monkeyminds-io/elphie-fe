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
// Users Endpoints ////////////////
export const createUser = () => `${MAIN_API}/users/create`;
export const getUserById = (id: string) => `${MAIN_API}/users/get?id=${id}`;
export const getUserByEmail = (email: string) => `${MAIN_API}/users/get?email=${email}`;
export const updateUserPassword = (id: string) => `${MAIN_API}/users/${id}/update/password`;
export const updateUser = (id: string) => `${MAIN_API}/users/${id}/update`;
export const deleteUser = (id: string) => `${MAIN_API}/users/${id}/delete`;

// Billing Info Endopoits ////////////////
export const createBilling = () => `${MAIN_API}/users/billing/create`;
export const getBillingInfoByUserId = (userId: string) => `${MAIN_API}/users/billing/get?userId=${userId}`;
export const updateBilling = (id: string) => `${MAIN_API}/users/billing/${id}/update`;
export const deleteBilling = (id: string) => `${MAIN_API}/users/billing/${id}/delete`;

// =============================================================================
// Bank Accounts Service Endpoints
// =============================================================================
// Accounts Endpoints ////////////////
export const createAccount = () => `${MAIN_API}/accounts/create`;
export const getAccountById = (id: string) => `${MAIN_API}/accounts/get?id=${id}`;
export const getFilteredAccountsByUserId = (userId: string, query: string) => `${MAIN_API}/accounts/get?userId=${userId}&query=${query}`;
export const updateAccount = (id: string) => `${MAIN_API}/accounts/${id}/update`;
export const deleteAccount = (id: string) => `${MAIN_API}/accounts/${id}/delete`;

// Transactions Endpoints ////////////////
export const createTransaction = () => `${MAIN_API}/transactions/create`;
export const getTransactionById = (id: string) => `${MAIN_API}/transactions/get?id=${id}`;
export const getFilteredTransactionsByUserId = (userId: string, query: string) => `${MAIN_API}/transactions/get?userId=${userId}&query=${query}`;
export const updateTransaction = (id: string) => `${MAIN_API}/transactions/${id}/update`;
export const deleteTransaction = (id: string) => `${MAIN_API}/transactions/${id}/delete`;

// TODO Plaid Endpoints ////////////////

// =============================================================================
// Savings Service Endpoints
// =============================================================================
export const createSavings = () => `${MAIN_API}/savings/create`;
export const getSavingsById = (id: string) => `${MAIN_API}/savings/get?id=${id}`;
export const getFilteredSavingsByUserId = (userId: string, query: string) => `${MAIN_API}/savings/get?userId=${userId}&query=${query}`;
export const updateSavings = (id: string) => `${MAIN_API}/savings/${id}/update`;
export const deleteSavings = (id: string) => `${MAIN_API}/savings/${id}/delete`;
