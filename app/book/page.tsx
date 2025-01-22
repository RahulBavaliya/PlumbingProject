"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 22.3039,
  lng: 70.8022, // Rajkot coordinates
};

export default function BookPage() {
  const [location, setLocation] = useState(center);

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setLocation({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-12 bg-background">
      <div className="container max-w-6xl">
        <h1 className="text-4xl font-bold mb-8">Book a Plumbing Service in Rajkot</h1>
        <meta name="description" content="Book professional plumbing services in Rajkot. 24/7 emergency plumber, competitive rates, expert solutions for all plumbing issues." />
        <meta name="keywords" content="book plumber Rajkot, emergency plumbing service, plumber near me Rajkot, plumbing repair booking" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Emergency Contact</p>
                  <a href="tel:+919876543210" className="text-primary hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@rajkotplumbing.com" className="text-primary hover:underline">
                    contact@rajkotplumbing.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Office Address</p>
                  <p className="text-muted-foreground">
                    123 Plumbing Street, Near City Center,<br />
                    Rajkot, Gujarat 360001
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Booking Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Service Request</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <Input id="phone" placeholder="Enter your phone number" type="tel" required />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">
                  Address
                </label>
                <Textarea id="address" placeholder="Enter your complete address" required />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Problem Description
                </label>
                <Textarea id="description" placeholder="Describe the plumbing issue" required />
              </div>
              <Button type="submit" className="w-full">
                Book Now
              </Button>
            </form>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="mt-8 p-6">
          <h2 className="text-2xl font-semibold mb-6">Select Your Location in Rajkot</h2>
          <div className="rounded-lg overflow-hidden">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                onClick={handleMapClick}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Click on the map to set your exact location in Rajkot
          </p>
        </Card>
      </div>
    </div>
  );
}