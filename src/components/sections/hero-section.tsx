"use client";

import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { openDialog } = useDonation();

  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white animate-in fade-in duration-1000">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/hopespring-hero/1920/1080"
          alt="Happy children smiling and playing"
          fill
          className="object-cover"
          priority
          data-ai-hint="happy children"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Together, We Can Make a Difference
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Join us in bringing hope to orphans, providing clean water, food, and support to people struck by catastrophes across Africa.
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
