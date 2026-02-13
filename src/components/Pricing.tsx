import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the option that fits your needs. One-time profile purchases or
            unlimited access with a subscription.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Single Profile */}
          <PricingCard
            title="Single Profile"
            price="$4.99"
            period="one-time"
            description="Perfect for checking a specific vehicle before purchase"
            features={[
              "Full engine DNA profile",
              "Vulnerability assessment",
              "Maintenance schedule",
              "Tuning potential data",
              "Risk rating",
              "Lifetime access to profile",
            ]}
            buttonText="Buy Profile"
            buttonVariant="outline"
          />

          {/* Subscription */}
          <PricingCard
            title="Full Access"
            price="$9.99"
            period="per month"
            description="Unlimited access for enthusiasts and professionals"
            features={[
              "Unlimited engine profiles",
              "All premium insights",
              "Early access to new data",
              "API access",
              "Priority support",
              "Compare multiple engines",
            ]}
            buttonText="Get Full Access"
            buttonVariant="default"
            highlighted
          />
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  highlighted?: boolean;
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8 relative",
        highlighted && "ring-2 ring-primary"
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-petrol flex-shrink-0" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant={buttonVariant} className="w-full" size="lg">
        {buttonText}
      </Button>
    </div>
  );
}
