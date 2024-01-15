// =============================================================================
// File Name: libs/definitions.ts
// File Description:
// This file contains the data object definitions.
// =============================================================================
// =============================================================================
// User Service Entity Definitions
// =============================================================================
export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    accountType: string,
    avatarPath: string,
    createdOn: string,
    updatedOn: string,
}

export type BillingInfo = {
    id: string,
    userId: string,
    addressLine1: string,
    addressLine2: string,
    county: string,
    eircode: string,
    cardName: string,
    cardNumber: string,
    cardExpiry: string,
    cardCvc: string,
    createdOn: string,
    updatedOn: string,
}

// =============================================================================
// Savings Service Entity Definitions
// =============================================================================
export type Savings = {
    id: string,
    user_id: string,
    account_id: string,
    name: string,
    target_amount: string,
    target_date: string,
    created_on: string,
    updated_on: string,
}