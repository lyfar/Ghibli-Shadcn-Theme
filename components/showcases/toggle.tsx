import { Toggle } from "@/components/ui/toggle"

export function ToggleShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Toggle</h2>
        <p className="text-muted-foreground mb-4">A toggle component for switching between two states.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Toggle</h3>
        <Toggle>Toggle</Toggle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Toggle variant="default">Default</Toggle>
          <Toggle variant="outline">Outline</Toggle>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle size="sm">Small</Toggle>
          <Toggle size="default">Default</Toggle>
          <Toggle size="lg">Large</Toggle>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">With Icon</h3>
        <Toggle aria-label="Toggle italic">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 4h-9M14 20H5M14.7 4.7L9.2 19.4" />
          </svg>
        </Toggle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Disabled</h3>
        <Toggle disabled>Disabled</Toggle>
      </div>
    </div>
  )
} 