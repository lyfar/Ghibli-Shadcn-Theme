import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Avatar</h2>
        <p className="text-muted-foreground mb-4">An avatar component for displaying user profile images.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Avatar</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Sizes</h3>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>

          <Avatar className="h-14 w-14">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">With Fallback</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Example: User Profile</h3>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
} 