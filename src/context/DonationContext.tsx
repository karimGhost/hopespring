"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { DonationDialog } from '@/components/donation-dialog';

export type ServicePreference = 'PayPal' | 'M-Pesa';

interface DonationContextType {
  openDialog: (service: ServicePreference) => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export function DonationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState<ServicePreference>('PayPal');

  const openDialog = (service: ServicePreference) => {
    setService(service);
    setIsOpen(true);
  };

  return (
    <DonationContext.Provider value={{ openDialog }}>
      {children}
      <DonationDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        servicePreference={service}
      />
    </DonationContext.Provider>
  );
}

export function useDonation() {
  const context = useContext(DonationContext);
  if (context === undefined) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
}
