import bcrypt from 'bcrypt';
import env from '../../env';

/*
    converts plain text password into a secure hash
    1. takes user's password (plain text)
    2. adds a random "salt" (random data)
    3. runs bcrypts alg multiple times (based on BCRYPT_ROUNDS)
    4. return a hash
*/

export const hashPassword = async (password: string) => {
    return bcrypt.hash(password, env.BCRYPT_ROUNDS);
}

export const comparePasswords = async (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword);
}