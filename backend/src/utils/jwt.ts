/*
    SignJWT -> creates and sigs new tokens
    jwtVerify -> verifies and decodeds tokens
    JWTPayload -> TS type fo JWT payload
*/

import { SignJWT, jwtVerify, JWTPayload as JoseJWTPayload } from 'jose';
import { createSecretKey } from 'crypto';
import env from '../../env';

// interface to add user-specific fields
export interface CustomJWTPayload extends JoseJWTPayload {
    id: string,
    email: string,
    name: string
}

// generate token function
/*
    1. takes user data (id, email, name)
    2. gets secret key from env config
    3. creates jwt:
        a. user data
        b. algorithm for signing
        c. timestamp when created
        d. expiration time
    4. Signs token with secret key
    5. returns the complete token
*/

export const generateToken = async (payload: CustomJWTPayload) => {

    /*
        1. Get the secret key from env variable and is used to sign the token (like a digital signature)
        2. Convert the secret string into a proper cryptographic key, the method creates a key object for signing JWTs
    */
    const secretKey = createSecretKey(env.JWT_SECRET, 'utf-8');
    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(env.JWT_EXPIRES_IN)
        .sign(secretKey)

    return token;
}

// verify token function
export const verifyToken = async (token: string) => {
    const secretKey = createSecretKey(env.JWT_SECRET, 'utf-8');
    const { payload } = await jwtVerify(token, secretKey);
    return payload as CustomJWTPayload;
}