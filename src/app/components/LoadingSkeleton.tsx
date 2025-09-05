export function ServiceCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl shadow-lg animate-pulse overflow-hidden">
      <div className="p-8">
        <div className="w-16 h-16 bg-muted rounded-2xl mb-6"></div>
        <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-muted rounded mb-6"></div>
        <div className="space-y-2 mb-6">
          <div className="h-3 bg-muted rounded w-5/6"></div>
          <div className="h-3 bg-muted rounded w-4/6"></div>
          <div className="h-3 bg-muted rounded w-5/6"></div>
          <div className="h-3 bg-muted rounded w-3/6"></div>
        </div>
        <div className="h-4 bg-muted rounded w-24"></div>
      </div>
    </div>
  );
}

export function ServicesSectionSkeleton() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-pulse">
          <div className="h-8 bg-muted rounded w-48 mx-auto mb-4"></div>
          <div className="h-5 bg-muted rounded w-96 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
        </div>
      </div>
    </div>
  );
}

export function ProfileSectionSkeleton() {
  return (
    <div className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
          <div className="h-5 bg-muted rounded w-96 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-lg shadow-xl animate-pulse">
              <div className="h-6 bg-muted rounded w-48 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/6"></div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg animate-pulse">
              <div className="h-5 bg-muted rounded w-32 mb-4"></div>
              <div className="space-y-3">
                <div className="h-2 bg-muted rounded"></div>
                <div className="h-2 bg-muted rounded w-5/6"></div>
                <div className="h-2 bg-muted rounded w-4/6"></div>
                <div className="h-2 bg-muted rounded w-3/6"></div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card p-6 rounded-lg shadow-lg animate-pulse">
                  <div className="w-12 h-12 bg-muted rounded-full mx-auto mb-3"></div>
                  <div className="h-6 bg-muted rounded w-16 mx-auto mb-2"></div>
                  <div className="h-3 bg-muted rounded w-20 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-background dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-pulse">
            <div className="space-y-3">
              <div className="h-12 bg-muted rounded w-3/4"></div>
              <div className="h-12 bg-muted rounded w-2/3"></div>
            </div>
            <div className="space-y-2">
              <div className="h-5 bg-muted rounded"></div>
              <div className="h-5 bg-muted rounded w-5/6"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 bg-muted rounded w-32"></div>
              <div className="h-12 bg-muted rounded w-32"></div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-muted rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}