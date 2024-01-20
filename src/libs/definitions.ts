// =============================================================================
// File Name: libs/definitions.ts
// File Description:
// This file contains the data object definitions.
// =============================================================================
// =============================================================================
// User Service Entities
// =============================================================================
export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    accountType: string,
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
// User Response Types
// =============================================================================
export type UserResponse = {
    data: {
        id: string,
        firstName?: string | null,
        lastName?: string | null,
        email: string,
        password: string,
        accountType: string,
        createdOn: string,
        updatedOn?: string | null,
    },
    ok: boolean,
    message: string,
    timestamp: string,
    status: number,
}

export type BillingResponse = {
    data: {
        id: string,
        userId: string,
        addressLine1: string,
        addressLine2?: string | null,
        county: string,
        eircode?: string | null,
        cardName: string,
        cardNumber: string,
        cardExpiry: string,
        cardCVC: string,
        createdOn: string,
        updatedOn?: string | null,
    },
    ok: boolean,
    message: string,
    timestamp: string,
    status: number,
}

// =============================================================================
// Savings Service Entities
// =============================================================================
export type Savings = {
    id: string,
    userId: string,
    accountId: string,
    name: string,
    targetAmount: string,
    targetDate: string,
    createdOn: string,
    updatedOn: string,
}

// =============================================================================
// Savings Response Types
// =============================================================================
export type SavingsResponse = {
    data: {
        id: string,
        userId: string,
        accountId: string,
        name: string | null,
        targetAmount: string,
        targetDate: string,
        createdOn: string,
        updatedOn?: string | null,
    },
    ok: boolean,
    message: string,
    timestamp: string,
    status: number,
}

// =============================================================================
// Accounts Service Entities
// =============================================================================
export type Account = {
    id: string,
    userId: string,
    name: string,
    type: string,
    iban: string,
    balance: string,
    plaidId: string,
    createdOn: string,
    updatedOn: string,
}

export type Transaction = {
    id: string,
    userId: string,
    accountId: string,
    reference: string,
    amount: string,
    type: string,
    date: string,
    createdOn: string,
    updatedOn: string,
}

// =============================================================================
// Accounts Response Types
// =============================================================================
export type AccountResponse = {
    data: {
        id: string,
        userId: string,
        name: string,
        type: string,
        iban: string,
        balance: string,
        plaidId: string | null,
        createdOn: string,
        updatedOn: string | null,
    },
    ok: boolean,
    message: string,
    timestamp: string,
    status: number,
}

export type TransactionResponse = {
    data: {
        id: string,
        userId: string,
        accountId: string,
        reference: string,
        amount: string,
        date: string,
        createdOn: string,
        updatedOn: string | null,
    },
    ok: boolean,
    message: string,
    timestamp: string,
    status: number,
}