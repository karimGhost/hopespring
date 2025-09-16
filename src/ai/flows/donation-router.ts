'use server';

/**
 * @fileOverview This file contains the donation routing flow.
 *
 * - routeDonation - A function that routes donations to available services.
 * - RouteDonationInput - The input type for the routeDonation function.
 * - RouteDonationOutput - The return type for the routeDonation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteDonationInputSchema = z.object({
  amount: z.number().describe('The donation amount.'),
  servicePreference: z
    .enum(['PayPal', 'M-Pesa', 'Any'])
    .describe('The donor\u2019s preferred donation service.'),
});
export type RouteDonationInput = z.infer<typeof RouteDonationInputSchema>;

const RouteDonationOutputSchema = z.object({
  service: z.enum(['PayPal', 'M-Pesa']).describe('The donation service to use.'),
});
export type RouteDonationOutput = z.infer<typeof RouteDonationOutputSchema>;

export async function routeDonation(input: RouteDonationInput): Promise<RouteDonationOutput> {
  return routeDonationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'donationRouterPrompt',
  input: {schema: RouteDonationInputSchema},
  output: {schema: RouteDonationOutputSchema},
  prompt: `You are a donation routing expert. You will determine the best donation
service to use based on the donor's preference and the available services.

Donor Preference: {{{servicePreference}}}
Donation Amount: {{{amount}}}

Available Services: PayPal, M-Pesa

Based on the donor's preference and the available services, determine the best
service to use. If the donor has a preference, and that service is available, use it.
If the donor has no preference, choose PayPal.

Return the service to use in the output.`,
});

const routeDonationFlow = ai.defineFlow(
  {
    name: 'routeDonationFlow',
    inputSchema: RouteDonationInputSchema,
    outputSchema: RouteDonationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
