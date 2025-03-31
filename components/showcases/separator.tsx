import { Separator } from "@/components/ui/separator"

export function SeparatorShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Separator</h2>
        <p className="text-muted-foreground mb-4">A separator component for visually dividing content.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Horizontal Separator</h3>
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Horizontal</h4>
            <p className="text-sm text-muted-foreground">Content above the separator</p>
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Separator</h4>
            <p className="text-sm text-muted-foreground">Content below the separator</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Vertical Separator</h3>
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Content</div>
          <Separator orientation="vertical" />
          <div>Content</div>
          <Separator orientation="vertical" />
          <div>Content</div>
        </div>
      </div>
    </div>
  )
} 