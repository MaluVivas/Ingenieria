import { Request, Response } from 'express';
import { db } from '../db/connection';
import { users } from '../db/schema';
//
import { generateToken } from '../utils/jwt';
import { hashPassword, comparePasswords } from '../utils/passwords';
//
import { eq } from 'drizzle-orm';

// register function
/*
    1. extract user data from request body
    2. hash the password
    3. save user info db
    4. generate token
    5. return success response with token
*/

export const register = async (req: Request, res: Response) => {
    try {
        //1.
        const { name, email, phone, password, avatarId } = req.body;

        // check if user already exists
        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email)
        });

        if (existingUser) {
            return res.status(409).json({ message: 'Email already registered' });
        }

        //2.
        const hashedPassword = await hashPassword(password);

        //3.
        const [user] = await db.insert(users).values({
            name,
            email,
            phone: phone ?? null,
            password: hashedPassword,
            avatarId: avatarId ?? 'default'
        }).returning({
            id: users.id,
            email: users.email,
            name: users.name,
            phone: users.phone,
            avatarId: users.avatarId
        });

        //4.
        const token = await generateToken({
            id: user.id,
            email: user.email,
            name: user.name
        });

        //5.
        return res.status(201).json({ message: 'User registered', user, token });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

/*
    handle user login
    1. extract email and password
    2. find user in db by email
    3. verify user exists
    4. compare provided password with stored hash
    5. generate authentication token
    6. return success response with user data and token
*/
export const login = async (req: Request, res: Response) => {
    try {
        //1.
        const { email, password } = req.body;

        //2.
        const user = await db.query.users.findFirst({
            where: eq(users.email, email)
        });

        //3.
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        //4.
        const isPasswordValid = await comparePasswords(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        //5.
        const token = await generateToken({
            id: user.id,
            email: user.email,
            name: user.name
        });

        //6.
        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                avatarId: user.avatarId
            },
            token
        });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}