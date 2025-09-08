"use client"

import React, { useState, useEffect } from 'react';
import { Search, Bird } from 'lucide-react';
import { Input } from '../ui/input';

// Sample pigeon data
const pigeonData = [
  { id: 1, name: "Thunder Wing", ringId: "BD-2024-001", breed: "Racing Homer" },
  { id: 2, name: "Sky Dancer", ringId: "BD-2024-002", breed: "Tippler" },
  { id: 3, name: "Storm Rider", ringId: "BD-2024-003", breed: "Racing Homer" },
  { id: 4, name: "Cloud Chaser", ringId: "BD-2024-004", breed: "Roller" },
  { id: 5, name: "Wind Walker", ringId: "BD-2024-005", breed: "Fantail" },
  { id: 6, name: "Lightning Bolt", ringId: "BD-2024-006", breed: "Racing Homer" },
  { id: 7, name: "Silver Arrow", ringId: "BD-2024-007", breed: "Carrier" },
  { id: 8, name: "Golden Eagle", ringId: "BD-2024-008", breed: "Show Racer" },
  { id: 9, name: "Blue Steel", ringId: "BD-2024-009", breed: "Tumbler" },
  { id: 10, name: "White Ghost", ringId: "BD-2024-010", breed: "Racing Homer" },
  { id: 11, name: "Red Baron", ringId: "BD-2024-011", breed: "High Flyer" },
  { id: 12, name: "Black Pearl", ringId: "BD-2024-012", breed: "Show Racer" },
];

export default function PigeonHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPigeon, setSelectedPigeon] = useState(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = pigeonData.filter(pigeon =>
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

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
       style={{
        backgroundImage: `url('https://i.ibb.co.com/WpnfSfZb/Log-in.png')`, 
      }}
    >
    

      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
        

        {/* Search Section */}
        <div className="w-full max-w-2xl mt-80 relative">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
              <Search className="w-5 h-5" />
            </div>
            <Input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search pigeons by name or ring ID..."
              className="w-full px-12 py-4 text-lg rounded-full border-2 bg-black h-14   backdrop-blur-sm placeholder:text-white  focus:outline-none focus:ring-2 focus:ring-white shadow-l text-white transition-all duration-300"


            />
            
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 max-h-96 overflow-y-auto z-50 backdrop-blur-sm ">
              {suggestions.map((pigeon, index) => (
                <div
                  key={pigeon.id}
                  onClick={() => handleSuggestionClick(pigeon)}
                  className={`px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors duration-200 flex items-center justify-between ${
                    index !== suggestions.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Bird className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{pigeon.name}</div>
                      <div className="text-sm text-slate-500">Ring ID: {pigeon.ringId}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                    {pigeon.breed}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No results */}
          {showSuggestions && suggestions.length === 0 && searchTerm.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 p-6 text-center backdrop-blur-sm bg-white/95">
              <Bird className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">No pigeons found matching your search</p>
            </div>
          )}
        </div>

        {/* Selected Pigeon Display */}
        {selectedPigeon && (
          <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md w-full border border-slate-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bird className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{selectedPigeon.name}</h3>
              <div className="text-sm text-slate-600 mb-4">
                <div className="bg-slate-100 rounded-full px-3 py-1 inline-block mb-2">
                  Ring ID: {selectedPigeon.ringId}
                </div>
                <div className="bg-blue-100 rounded-full px-3 py-1 inline-block">
                  {selectedPigeon.breed}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-xs text-slate-500">Races</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-xs text-slate-500">Wins</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-orange-600">3rd</div>
                  <div className="text-xs text-slate-500">Rank</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}