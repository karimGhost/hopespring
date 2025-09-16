"use server";

import { z } from 'zod';
import { routeDonation } from '@/ai/flows/donation-router';

const donationSchema = z.object({
  amount: z.coerce.number().min(1, { message: 'Donation must be at least $1.' }),
  servicePreference: z.enum(['PayPal', 'M-Pesa', 'Any']),
});

type DonationState = {
  message?: string | null;
  service?: 'PayPal' | 'M-Pesa';
  errors?: {
    amount?: string[];
    servicePreference?: string[];
  };
} | null;

export async function processDonation(
  prevState: DonationState,
  formData: FormData
): Promise<DonationState> {
  try {
    const validatedFields = donationSchema.safeParse({
      amount: formData.get('amount'),
      servicePreference: formData.get('servicePreference'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Invalid data provided.',
      };
    }

    const result = await routeDonation(validatedFields.data);
    
    // In a real app, you would integrate with the payment gateway SDK here.
    // For this prototype, we'll simulate a successful processing.
    return {
      message: `Donation of $${validatedFields.data.amount} will be processed via ${result.service}. Thank you for your generosity!`,
      service: result.service,
    };
  } catch (error) {
    console.error('Donation processing error:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
