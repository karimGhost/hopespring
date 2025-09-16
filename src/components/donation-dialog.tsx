"use client";

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { z } from 'zod';
import { DollarSign } from 'lucide-react';

import { processDonation, ServicePreference } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface DonationDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  servicePreference: ServicePreference;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Processing...' : 'Donate Now'}
    </Button>
  );
}

export function DonationDialog({ isOpen, setIsOpen, servicePreference }: DonationDialogProps) {
  const [state, formAction] = useFormState(processDonation, null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!state) return;

    if (state.message && !state.errors) {
      toast({
        title: 'Thank You!',
        description: state.message,
      });
      setIsOpen(false);
      formRef.current?.reset();
    } else if (state.message && state.errors) {
       toast({
        variant: "destructive",
        title: 'Oops! Something went wrong.',
        description: state.errors?.amount?.[0] || state.message,
      });
    }
  }, [state, setIsOpen, toast]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Make a Donation</DialogTitle>
          <DialogDescription>
            You are donating with {servicePreference}. Every contribution makes a huge difference.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-base">Amount (USD)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="50.00"
                required
                min="1"
                step="0.01"
                className="pl-10 text-lg"
                aria-describedby="amount-error"
              />
            </div>
            {state?.errors?.amount && (
              <p id="amount-error" className="text-sm text-destructive">
                {state.errors.amount[0]}
              </p>
            )}
          </div>
          <input type="hidden" name="servicePreference" value={servicePreference} />
          <DialogFooter>
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
