import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Edit, Eye, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

const PigeonTable = ({ data, isLoading, currentPage, onPageChange, onEdit }) => {
  if (isLoading) {
    return <TableSkeleton />
  }

  if (!data?.data?.data?.length) {
    return (
      <Card>
        <CardContent className="p-8">
          <div className="text-center">
            <p className="text-gray-500 text-lg">No pigeons found</p>
            <p className="text-gray-400 text-sm mt-1">Try adjusting your filters</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const pigeons = data.data.data
  const pagination = data.data.pagination

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'racing': return 'bg-blue-100 text-blue-800'
      case 'breeding': return 'bg-purple-100 text-purple-800'
      case 'sold': return 'bg-yellow-100 text-yellow-800'
      case 'lost': return 'bg-red-100 text-red-800'
      case 'deceased': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRatingStars = (rating) => {
    const stars = Math.floor(rating / 20) // Convert to 5-star scale
    return '★'.repeat(stars) + '☆'.repeat(5 - stars)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < pagination?.totalPage) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-700">
                <TableRow className="hover:bg-slate-600">
                  <TableHead className="text-white w-12">
                    <Checkbox className="border-slate-400" />
                  </TableHead>
                  <TableHead className="text-white">Image</TableHead>
                  <TableHead className="text-white">Name</TableHead>
                  <TableHead className="text-white">Country</TableHead>
                  <TableHead className="text-white">Breeder</TableHead>
                  <TableHead className="text-white">Ring Number</TableHead>
                  <TableHead className="text-white">Bird Year</TableHead>
                  <TableHead className="text-white">Quality Breeder</TableHead>
                  <TableHead className="text-white">Quality Racer</TableHead>
                  <TableHead className="text-white">Racing Rating</TableHead>
                  <TableHead className="text-white">Pattern</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Gender</TableHead>
                  <TableHead className="text-white">Rating</TableHead>
                  <TableHead className="text-white">Color</TableHead>
                  <TableHead className="text-white">Location</TableHead>
                  <TableHead className="text-white w-20">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pigeons.map((pigeon, index) => (
                  <TableRow key={pigeon._id} className="hover:bg-gray-50">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    
                    <TableCell>
                      <Avatar className="w-10 h-10">
                        <AvatarImage 
                          src={pigeon.photos?.[0] || '/placeholder-pigeon.jpg'} 
                          alt={pigeon.name} 
                        />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {pigeon.name?.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </TableCell>

                    <TableCell className="font-medium text-blue-600">
                      {pigeon.name}
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🇧🇩</span>
                        {pigeon.country}
                      </div>
                    </TableCell>

                    <TableCell className="text-blue-600">
                      {pigeon.breeder}
                    </TableCell>

                    <TableCell className="font-mono text-sm">
                      {pigeon.ringNumber}
                    </TableCell>

                    <TableCell>{pigeon.birthYear}</TableCell>
                    <TableCell>{pigeon.breederRating}</TableCell>
                    <TableCell>{pigeon.racerRating}</TableCell>

                    {/* <TableCell>
                      <div className="text-sm">
                        <div>Sire: {pigeon.fatherRingId?.name || 'N/A'}</div>
                        <div className="text-gray-500">Ring: {pigeon.fatherRingId?.ringNumber || 'N/A'}</div>
                      </div>
                    </TableCell> */}

                    {/* <TableCell>
                      <div className="text-sm">
                        <div>Dam: {pigeon.motherRingId?.name || 'N/A'}</div>
                        <div className="text-gray-500">Ring: {pigeon.motherRingId?.ringNumber || 'N/A'}</div>
                      </div>
                    </TableCell> */}

                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 border-yellow-200 text-yellow-700">
                        {pigeon.racingRating || pigeon.racerRating || 0}
                      </Badge>
                    </TableCell>

                    <TableCell>{pigeon.pattern}</TableCell>

                    <TableCell>
                      <Badge 
                        variant={pigeon.verified ? "default" : "secondary"}
                        className={pigeon.verified ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}
                      >
                        {pigeon.verified ? 'Racing' : 'Breeding'}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={pigeon.gender === 'Male' ? 'border-blue-200 text-blue-700 bg-blue-50' : 'border-pink-200 text-pink-700 bg-pink-50'}
                      >
                        {pigeon.gender}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <div className="text-yellow-500">
                        {getRatingStars(pigeon.breederRating || pigeon.racherRating || 0)}
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className="bg-blue-50 border-blue-200 text-blue-700"
                      >
                        {pigeon.color}
                      </Badge>
                    </TableCell>

                    <TableCell>{pigeon.location}</TableCell>

                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onEdit(pigeon._id)}
                          className="h-8 w-8 p-0 hover:bg-blue-100"
                        >
                          <Edit className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 hover:bg-gray-100"
                        >
                          <Eye className="h-4 w-4 text-gray-600" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 hover:bg-gray-100"
                        >
                          <MoreHorizontal className="h-4 w-4 text-gray-600" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {pagination && (
        <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-lg">
          <div className="flex items-center text-sm text-gray-500">
            Showing {((currentPage - 1) * pagination.limit) + 1} to {Math.min(currentPage * pagination.limit, pagination.total)} of {pagination.total} entries
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage <= 1}
              className="h-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, pagination.totalPage) }, (_, i) => {
                const page = i + 1
                return (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => onPageChange(page)}
                    className="h-8 w-8"
                  >
                    {page}
                  </Button>
                )
              })}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage >= pagination.totalPage}
              className="h-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

const TableSkeleton = () => (
  <Card>
    <CardContent className="p-6">
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

export default PigeonTable