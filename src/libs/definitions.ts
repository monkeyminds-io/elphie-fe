// =============================================================================
// File Name: libs/definitions.ts
// File Description:
// This file contains the data object definitions.
// =============================================================================
// =============================================================================
// User Object Definition
// =============================================================================
export type User = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    plan: string;
    avatar_url: string;
    created_at: string;
    updated_at: string;
}

export type Savings = {
    id: string,
    user_id: string,
    account_id: string,
    name: string | null,
    target_amount: string,
    target_date: string,
    created_on: string,
    updated_on: string,
}