import { Category } from '@/apis/categories'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ImageLoader from '@/components/ui/image-loader'
import { ImageZoom } from '@/components/ui/shadcn-io/image-zoom'
import { format } from 'date-fns'
import React from 'react'

type Props = {
    category: Category
}

const CategoryDetailInfoUI = ({category}: Props) => {
  return (
    <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Name</h3>
                <p className="text-sm">{category?.name}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Description</h3>
                <p className="text-sm">{category?.description}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Parent Category</h3>
                <p className="text-sm">{category?.parentId ? "Has Parent" : "Root Category"}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Sort Order</h3>
                <p className="text-sm">{category?.sortOrder}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Status</h3>
                <Badge
                  variant={category?.isActive ? "default" : "secondary"}
                  className={category?.isActive ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"}
                >
                  {category?.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Image</h3>
                <ImageZoom>
          <ImageLoader
            alt={category?.name}
            className="h-auto w-32"
            height={800}
            src={category?.imageUrl!}
            unoptimized
            width={1200}
          />
        </ImageZoom>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Created At</h3>
                <p className="text-sm">{format(category?.createdAt, "dd/MM/yyyy HH:mm:ss")}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Updated At</h3>
                <p className="text-sm">{format(category?.updatedAt, "dd/MM/yyyy HH:mm:ss")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}

export default CategoryDetailInfoUI