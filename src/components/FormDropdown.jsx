'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const FormDropdown = ({ buttonText, buttonClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const formOptions = [
    { name: 'Initial Submission Form', path: '/initial-submission' },
    { name: 'Misuse Report Form', path: '/misuse-report' },
    { name: 'Request to Seal or Expunge', path: '/seal-expunge' },
    { name: 'Technical Support Request Form', path: '/technical-support' },
    { name: 'Application for Juror Program', path: '/juror-enrollment' },
    { name: 'Respondent Submission Form', path: '/respondent-submission' },
    { name: 'Identity Dispute Claim Form', path: '/identity-dispute' },
    { name: 'Appeal Request Form', path: '/appeal-request' },
    { name: 'Juror Recusal Form', path: '/juror-recusal' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        className={buttonClassName || "bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center"}
      >
        {buttonText || 'File New Record'}
   
      </Button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-72 bg-white rounded-md shadow-lg py-1 overflow-hidden">
          <div className="max-h-96 overflow-y-auto">
            {formOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.path)}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-red-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormDropdown;