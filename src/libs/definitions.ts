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
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    account_type: string,
    avatar_url: string,
    created_on: string,
    updated_on: string,
}

export type BillingInfo = {
    id: string,
    user_id: string,
    address_line_1: string,
    address_line_2: string,
    county: string,
    eircode: string,
    card_name: string,
    card_number: string,
    card_expiry: string,
    card_cvc: string,
    created_on: string,
    updated_on: string,
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