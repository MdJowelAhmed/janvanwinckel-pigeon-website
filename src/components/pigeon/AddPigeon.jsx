"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Plus, X, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { 
  useCreatePigeonMutation, 
  useUpdatePigeonMutation,
  useGetPigeonPackagesQuery,
  useGetSinglePigeonQuery 
} from '@/redux/featured/pigeon/pigeonApi';

const AddPigeonContainer = ({ pigeonId = null }) => {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const editId = pigeonId || searchParams.get('edit') || params?.id
  const isEditMode = !!editId
  
  const [createPigeon, { isLoading: isCreating }] = useCreatePigeonMutation()
  const [updatePigeon, { isLoading: isUpdating }] = useUpdatePigeonMutation()
  const { data: pigeonData } = useGetPigeonPackagesQuery([])
  const { data: singlePigeon, isLoading: isLoadingSingle } = useGetSinglePigeonQuery(editId, {
    skip: !editId
  })
  
  const [photos, setPhotos] = useState([])
  const [showPigeonResult, setShowPigeonResult] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    setValue, 
    watch, 
    reset,
    formState: { errors } 
  } = useForm({
    defaultValues: {
      ringNumber: '',
      name: '',
      country: 'Bangladesh',
      birthYear: new Date().getFullYear(),
      shortInfo: '',
      breeder: '',
      color: '',
      pattern: '',
      gender: '',
      status: 'Active',
      location: 'Dhaka',
      notes: '',
      results: '',
      breederRating: 0,
      racingRating: 0,
      fatherRingId: null,
      motherRingId: null,
      category: '',
      verified: false,
      iconic: false
    }
  })
  
  const isLoading = isCreating || isUpdating || isLoadingSingle
  
  // Get available pigeons for parent selection
  const availablePigeons = pigeonData?.data?.data || []
  
  // Load pigeon data for edit mode
  useEffect(() => {
    if (isEditMode && singlePigeon?.data) {
      const pigeon = singlePigeon.data
      reset({
        ringNumber: pigeon.ringNumber || '',
        name: pigeon.name || '',
        country: pigeon.country || 'Bangladesh',
        birthYear: pigeon.birthYear || new Date().getFullYear(),
        shortInfo: pigeon.shortInfo || '',
        breeder: pigeon.breeder || '',
        color: pigeon.color || '',
        pattern: pigeon.pattern || '',
        gender: pigeon.gender || '',
        status: pigeon.status || 'Active',
        location: pigeon.location || 'Dhaka',
        notes: pigeon.notes || '',
        results: pigeon.results || '',
        breederRating: pigeon.breederRating || 0,
        racingRating: pigeon.racingRating || 0,
        fatherRingId: pigeon.fatherRingId ,
        motherRingId: pigeon.motherRingId ,
        category: pigeon.category || '',
        verified: pigeon.verified || false,
        iconic: pigeon.iconic || false
      })
      
      if (pigeon.photos && pigeon.photos.length > 0) {
        setPhotos(pigeon.photos.map((photo, index) => ({
          id: index,
          url: photo,
          file: null
        })))
      }
      
      setShowPigeonResult(!!pigeon.results)
    }
  }, [isEditMode, singlePigeon, reset])

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    if (photos.length + files.length > 4) {
      toast.error('You can upload maximum 4 photos');
      return;
    }

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotos(prev => [...prev, {
          id: Date.now() + Math.random(),
          file,
          url: e.target.result
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (photoId) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
  };

// In your onSubmit function, try one of these field names:

const onSubmit = async (data) => {
  try {
    const formDataToSend = new FormData();

    const dataObject = {
      ...data,
    };

    if (!dataObject.fatherRingId || dataObject.fatherRingId === "none") {
      delete dataObject.fatherRingId;
    }
    if (!dataObject.motherRingId || dataObject.motherRingId === "none") {
      delete dataObject.motherRingId;
    }

    if (isEditMode) {
      dataObject._id = editId;
    }

    formDataToSend.append("data", JSON.stringify(dataObject));

    photos.forEach((photo) => {
      if (photo.file) {
        formDataToSend.append("image", photo.file);
      }
    });

    if (isEditMode) {
      await updatePigeon({ id: editId, data: formDataToSend }).unwrap();
      toast.success("Pigeon updated successfully!");
    } else {
      await createPigeon(formDataToSend).unwrap();
      toast.success("Pigeon added successfully!");
    }

    router.push("/");
  } catch (error) {
    console.error("Submit error:", error);
    toast.error(error.message || `Failed to ${isEditMode ? "update" : "add"} pigeon`);
  }
};


  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditMode ? 'Edit' : 'Add'} <span className="text-teal-500">Pigeon</span>
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Welcome to the pigeon pedigree database! To add a new pigeon, please fill out the following details. This will help us track its lineage and make it easier for you to manage your pigeons.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Form Fields */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ring Number *</label>
                  <input
                    type="text"
                    {...register('ringNumber', { required: 'Ring number is required' })}
                    placeholder="Ring Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose a Country</label>
                  <select
                    {...register('country')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Germany">Germany</option>
                    <option value="Netherlands">Netherlands</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Birth Year</label>
                  <select
                    {...register('birthYear', { valueAsNumber: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Breeder</label>
                  <select
                    {...register('breeder')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Breeder</option>
                    <option value="John Smith">John Smith</option>
                    <option value="Ahmed Hassan">Ahmed Hassan</option>
                    <option value="Peter Johnson">Peter Johnson</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    {...register('location')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Short Information of the pigeon</label>
                <textarea
                  {...register('shortInfo')}
                  placeholder="Brief description of the pigeon"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>
            </div>

            {/* Physical Characteristics */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Physical Characteristics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color & Pattern</label>
                  <select
                    {...register('color')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Color</option>
                    <option value="Blue">Blue</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                    <option value="Black">Black</option>
                    <option value="Checkered">Checkered</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pattern</label>
                  <select
                    {...register('pattern')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Pattern</option>
                    <option value="Solid">Solid</option>
                    <option value="Spotted">Spotted</option>
                    <option value="Checkered">Checkered</option>
                    <option value="Barred">Barred</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    {...register('gender')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Hen">Hen</option>
                    <option value="Cook">Cook</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Ratings</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Racing Rating</label>
                  <select
                    {...register('racingRating', { valueAsNumber: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {Array.from({ length: 11 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Racer Rating</label>
                  <select
                    {...register('racherRating', { valueAsNumber: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {Array.from({ length: 11 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Breeder Rating</label>
                  <select
                    {...register('breederRating', { valueAsNumber: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {Array.from({ length: 11 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    {...register('status')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Racing">Racing</option>
                    <option value="Breeding">Breeding</option>
                    <option value="Sold">Sold</option>
                    <option value="Lost">Lost</option>
                    <option value="Deceased">Deceased</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Selection */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Parent Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Father Ring No</label>
                  <select
                    {...register('fatherRingId')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="none">No Father Selected</option>
                    {availablePigeons.filter(p => p.gender === 'Male').map(pigeon => (
                      <option key={pigeon._id} value={pigeon._id}>
                        {pigeon.name} ({pigeon.ringNumber})
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Enter as part of the ring or part of the name to search for the corresponding Pigeon</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mother Ring No</label>
                  <select
                    {...register('motherRingId')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="none">No Mother Selected</option>
                    {availablePigeons.filter(p => p.gender === 'Female').map(pigeon => (
                      <option key={pigeon._id} value={pigeon._id}>
                        {pigeon.name} ({pigeon.ringNumber})
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Enter a short string or part of the name to search for the corresponding Pigeon</p>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    {...register('category')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter category"
                  />
                </div>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register('verified')}
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">Verified</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register('iconic')}
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">Iconic</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Write Additional Notes</label>
                <textarea
                  {...register('notes')}
                  placeholder="Additional notes about the pigeon"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="showResults"
                  checked={showPigeonResult}
                  onChange={(e) => setShowPigeonResult(e.target.checked)}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="showResults" className="ml-2 text-sm font-medium text-gray-700">
                  Add Race Results
                </label>
              </div>

              {showPigeonResult && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Results</label>
                  <textarea
                    {...register('results')}
                    placeholder="Race results and achievements"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    You'll receive category: Others<br />
                    Sprint/Middle Max 600 Km<br />
                    Semi/Long Min 2,500 Extreme Max 2,500 Extreme
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Photo Upload */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
              <h2 className="text-lg font-semibold mb-4">
                Pigeon Photo <span className="text-red-500">*</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="relative">
                    {photos[index] ? (
                      <div className="relative aspect-square border-2 border-gray-200 rounded-lg overflow-hidden group">
                        <img 
                          src={photos[index].url} 
                          alt={`Pigeon photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(photos[index].id)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center aspect-square border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-teal-400 transition-colors bg-gray-50">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                          multiple
                        />
                        <Plus className="w-6 h-6 text-gray-400 mb-1" />
                        <span className="text-xs text-gray-500 text-center px-2">
                          {index === 0 ? 'Upload Pigeon Photo' : 
                           index === 1 ? 'Upload Eye Photo' : 
                           index === 2 ? 'Upload Ownership Card' : 
                           'Original'}
                        </span>
                      </label>
                    )}
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                Upload up to 4 photos. First photo will be the main display photo.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <Button
            type="submit"
            disabled={isLoading}
            className="px-12 py-3 bg-teal-500 hover:bg-teal-600"
          >
            {isLoading ? (isEditMode ? 'Updating...' : 'Adding...') : (isEditMode ? 'Update Pigeon' : 'Add Pigeon')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPigeonContainer;