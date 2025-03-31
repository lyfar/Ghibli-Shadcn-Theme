import { Badge } from "@/components/ui/badge"

export function BadgeShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Badge</h2>
        <p className="text-muted-foreground mb-4">A badge component for displaying status or count information.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Example Usage</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-100 text-green-900 border-green-500">
              Active
            </Badge>
            <span className="text-sm">User account is active</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-red-100 text-red-900 border-red-500">
              Inactive
            </Badge>
            <span className="text-sm">User account is inactive</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge>New</Badge>
            <span className="text-sm">Feature just released</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Beta</Badge>
            <span className="text-sm">Feature in beta testing</span>
          </div>
        </div>
      </div>
    </div>
  )
} 