"use client";

import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  const { openDialog } = useDonation();

  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center text-center text-white animate-in fade-in duration-1000 delay-700">
       <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/hopespring-cta/1200/800"
          alt="A volunteer's hands holding another person's hands caringly"
          fill
          className="object-cover"
          data-ai-hint="volunteer helping"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">
            Every Drop, Every Meal, Every Smile Counts
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Your generosity can change lives. Be part of something bigger today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button
              size="lg"
              onClick={() => openDialog('PayPal')}
              className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 shadow-lg transition-transform duration-200 hover:scale-105"
            >
              Donate with PayPal
            </Button>
            <Button
              size="lg"
              onClick={() => openDialog('M-Pesa')}
              className="bg-green-500 text-white hover:bg-green-600 shadow-lg transition-transform duration-200 hover:scale-105"
            >
              Donate with M-Pesa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
