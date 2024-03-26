// src/server/services/userService.ts
import bcrypt from 'bcryptjs';
import { prisma } from '../prismaClient';
import { z } from 'zod';

const RegisterInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function registerUser(input: z.infer<typeof RegisterInput>) {
  const { email, password } = RegisterInput.parse(input);
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true, // Avoid returning sensitive data like the password hash
    },
  });

  return newUser;
}
