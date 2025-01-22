import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WrenchIcon, PhoneCall, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/PlumbingProject/icons/icon5.jpeg"
          alt="Professional plumbing services"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Professional Plumbing Services in Rajkot</h1>
            <p className="text-xl mb-8">24/7 Emergency Service • Licensed Professionals • Best Rates</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/book">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:+919876543210">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Emergency Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <WrenchIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-muted-foreground">Available round the clock for emergency services</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Local Experts</h3>
              <p className="text-muted-foreground">Experienced plumbers from Rajkot</p>
            </div>
            <div className="text-center">
              <WrenchIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Quality Work</h3>
              <p className="text-muted-foreground">Guaranteed satisfaction with our service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Emergency Repairs",
    description: "24/7 emergency plumbing repairs for leaks, bursts, and blockages.",
  },
  {
    title: "Bathroom Installation",
    description: "Complete bathroom fitting and renovation services.",
  },
  {
    title: "Pipe Services",
    description: "Installation, repair, and maintenance of all types of pipes.",
  },
];