import { z } from 'zod'

/** Shared by the client form and the /api/contact route so both reject the same input. */
export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactForm = z.infer<typeof contactSchema>
