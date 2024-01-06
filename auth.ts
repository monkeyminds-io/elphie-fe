// =============================================================================
// File Name: auth.ts
// File Description:
// This file contains the code for the Next Auth functionality
// =============================================================================
// =============================================================================
// Auth Imports
// =============================================================================
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from './src/libs/definitions';
import bcrypt from 'bcrypt';

// =============================================================================
// Auth Functions
// =============================================================================
const getUser : Function = async (email: string): Promise<User | undefined> => {
    try {
        // TODO Update API Call
        // return await fetch(`localhost:8000/users/get?email=${email}`)
        // .then((response) => {
        //     if(!response) return null;
        //     return response.json();
        // }).then((data) => {
        //     return data.user;
        // });

        const user: User = {
            id: '01',
            firstname: 'Pau',
            lastname: 'Ferrer',
            email: 'pau@mail.com',
            password: '12345678',
            plan: 'elphie',
            avatar_url: '',
            created_on: '',
            updated_on: '',
            deleted_on: ''
        }
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

// =============================================================================
// Auth
// =============================================================================
export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string() })
                .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                    // const passwordsMatch = await bcrypt.compare(password, user.password);
                    const passwordsMatch = password === user.password;
        
                    if (passwordsMatch) return user;
                }
        
                console.log('Invalid credentials');
                return null;
            },
        }),
      ],
  });