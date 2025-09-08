"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, ChevronUp, ExternalLink, Award, MapPin, Calendar, User, Palette, Activity, Heart, Baby } from 'lucide-react';

const PigeonOverviewContainer = () => {
  const [showSiblings, setShowSiblings] = useState(false);
  const [showRaceResults, setShowRaceResults] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Pigeon Image */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-gray-200 flex items-center justify-center">
                <div className="w-full h-full bg-cover bg-center" style={{
                  backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM2MzY2ZjEiLz4KPGVsbGlwc2UgY3g9IjE1MCIgY3k9IjE4MCIgcng9IjYwIiByeT0iNDAiIGZpbGw9IiM0Yjc2ODgiLz4KPHN2Zz4K')`
                }}>
                  <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-20">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-medium">Blue Thunder</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Basic Information */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-xl font-bold text-blue-600 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Basic Information
                </CardTitle>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Name</p>
                        <p className="font-semibold">Blue Thunder</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Birth Year</p>
                        <p className="font-semibold">2021</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Palette className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Color</p>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Blue
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Ring Number</p>
                        <p className="font-semibold text-blue-600">BE 6971204</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Gender</p>
                        <p className="font-semibold">Cock</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Activity className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          Racing
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Country</p>
                    <p className="font-semibold">USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Father and Mother Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-600">Father Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 italic">Information not available</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-600">Mother Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 italic">Information not available</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl font-bold text-blue-600">Additional Information</CardTitle>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Breeder</p>
                <p className="font-semibold">Breeder</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Breeder Quality</p>
                <Badge className="bg-blue-100 text-blue-800">Like New</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Location</p>
                <p className="font-semibold">Belgium</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Father Ring Number</p>
                <p className="font-semibold text-blue-600">BE 6971204</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Mother Ring Number</p>
                <p className="font-semibold text-blue-600">BE 6971204</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Pattern</p>
                <p className="font-semibold">Barkess</p>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Your Story</p>
              <p className="text-gray-700 leading-relaxed">
                The Blue Thunder pigeon is a blue-gray bird with dark bars, known for its calm nature and 
                strong racing performance. It's popular among experienced breeders and racing enthusiasts.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Siblings Information */}
        <Card>
          <CardHeader>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto"
              onClick={() => setShowSiblings(!showSiblings)}
            >
              <CardTitle className="text-xl font-bold text-blue-600 flex items-center gap-2">
                <Baby className="w-5 h-5" />
                Siblings Information
              </CardTitle>
              {showSiblings ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CardHeader>
          {showSiblings && (
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left p-3 font-semibold">Name</th>
                      <th className="text-left p-3 font-semibold">Wing Ring</th>
                      <th className="text-left p-3 font-semibold">Extra Position</th>
                      <th className="text-left p-3 font-semibold">Birth Year</th>
                      <th className="text-left p-3 font-semibold">Quality Breeder</th>
                      <th className="text-left p-3 font-semibold">Quality Name</th>
                      <th className="text-left p-3 font-semibold">Father</th>
                      <th className="text-left p-3 font-semibold">Mother</th>
                      <th className="text-left p-3 font-semibold">Gender</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "The Ace", wingRing: "Full Sibling-1 Power Edition", extraPos: "BE 6971204", year: "2021", quality: "Like New", qualityName: "Fast Racer", father: "The Ace", mother: "The Ace", gender: "Cock", status: "" },
                      { name: "The Ace", wingRing: "Half Sibling-1 Power Edition", extraPos: "BE 6971204", year: "2020", quality: "Like New", qualityName: "Fast Racer", father: "The Ace", mother: "The Ace", gender: "Cock", status: "" },
                      { name: "The Ace", wingRing: "Half Sibling-1 Power Edition", extraPos: "BE 6971204", year: "2019", quality: "Like New", qualityName: "Fast Racer", father: "The Ace", mother: "The Ace", gender: "Cock", status: "" }
                    ].map((sibling, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 text-blue-600 font-medium">{sibling.name}</td>
                        <td className="p-3">{sibling.wingRing}</td>
                        <td className="p-3 text-blue-600">{sibling.extraPos}</td>
                        <td className="p-3">{sibling.year}</td>
                        <td className="p-3">{sibling.quality}</td>
                        <td className="p-3">{sibling.qualityName}</td>
                        <td className="p-3">{sibling.father}</td>
                        <td className="p-3">{sibling.mother}</td>
                        <td className="p-3">{sibling.gender}</td>
                        <td className="p-3">{sibling.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Race Results */}
        <Card>
          <CardHeader>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto"
              onClick={() => setShowRaceResults(!showRaceResults)}
            >
              <CardTitle className="text-xl font-bold text-blue-600 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Race Result
              </CardTitle>
              {showRaceResults ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CardHeader>
          {showRaceResults && (
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left p-3 font-semibold">Name</th>
                      <th className="text-left p-3 font-semibold">Date</th>
                      <th className="text-left p-3 font-semibold">Distance</th>
                      <th className="text-left p-3 font-semibold">Last Rank</th>
                      <th className="text-left p-3 font-semibold">Place</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "The Ace", date: "07-08-2024", distance: "200KM", lastRank: "Like New", place: "First Race" },
                      { name: "The Ace", date: "07-08-2024", distance: "200KM", lastRank: "Like New", place: "First Race" },
                      { name: "The Ace", date: "07-08-2024", distance: "200KM", lastRank: "Like New", place: "First Race" }
                    ].map((race, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 text-blue-600 font-medium">{race.name}</td>
                        <td className="p-3">{race.date}</td>
                        <td className="p-3">{race.distance}</td>
                        <td className="p-3">{race.lastRank}</td>
                        <td className="p-3">{race.place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Additional Notes:</strong>
                </p>
                <p className="text-sm text-gray-700">
                  The Blue Thunder pigeon is a blue-gray bird with dark bars, known for its calm nature and 
                  strong racing performance. It's popular among experienced breeders and racing enthusiasts.
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default PigeonOverviewContainer;
