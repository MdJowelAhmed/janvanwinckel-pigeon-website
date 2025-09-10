"use client";
import React, { useState, useEffect } from "react";
import { Search, Bird } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import FormDropdown from "../FormDropdown";

export default function PigeonHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPigeon, setSelectedPigeon] = useState(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = pigeonData.filter(
        (pigeon) =>
          pigeon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pigeon.ringId.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleSuggestionClick = (pigeon) => {
    setSearchTerm(`${pigeon.name} (${pigeon.ringId})`);
    setSelectedPigeon(pigeon);
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedPigeon(null);
  };

  const handleFileNewRecordClick = () => {
    window.location.href = "/dashboard";
  };

  return (
    // Add negative margins to break out of parent container
    <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16">
      <div className="w-screen h-[70vh] relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/bg-banner.png)" }}
        ></div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
          <div className="w-full max-w-2xl mt-40 relative text-center">
            <Image src="/assets/logo.png" alt="logo" width={100} height={100} className="mx-auto"/>
            <h2 className="text-white text-3xl md:text-5xl lg:text-7xl">Glass File</h2>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl">
              DOCUMENT. VERIFY. PROTECT.
            </h3>
            <p className="text-white">
              A public archive of relationship conduct—documented, accessible, and
              preserved for awareness and safety.
            </p>

            <Button className="mt-24 px-16 text-white bg-primary rounded-lg" onClick={handleFileNewRecordClick}>
              File New Record
            </Button>

            {/* <div className="mt-24">
              <FormDropdown buttonText="File New Record" buttonClassName="px-16 text-white bg-primary rounded-lg" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}