import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Droplets, UtensilsCrossed, Baby, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Cause {
  icon: LucideIcon;
  title: string;
  description: string;
}

const causes: Cause[] = [
  {
    icon: Droplets,
    title: "Clean Water",
    description: "Provide safe drinking water to communities."
  },
  {
    icon: UtensilsCrossed,
    title: "Nutritious Food",
    description: "Help feed hungry children and families."
  },
  {
    icon: Baby,
    title: "Support Orphans",
    description: "Give orphans shelter, care, and a brighter future."
  },
  {
    icon: HeartHandshake,
    title: "Emergency Relief",
    description: "Deliver urgent aid to disaster victims."
  }
];

export function CausesSection() {
  return (
    <section className="py-12 md:py-24 bg-secondary animate-in fade-in duration-1000 delay-500">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Your Donation Supports</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {causes.map((cause, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                  <cause.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl">{cause.title}</CardTitle>
                <CardDescription className="text-base">{cause.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
