import React from "react";
import Card from "../components/common/card";
import Button from "../components/common/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
      
      <Card 
        title="Cozy Apartment"
        description="A beautiful apartment in the city center."
        image="/assets/property1.jpg"
      />

      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert("Booking...")} />
      </div>
    </main>
  );
}
