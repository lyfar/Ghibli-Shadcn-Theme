import { Slider } from "@/components/ui/slider"

export function SliderShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Slider</h2>
        <p className="text-muted-foreground mb-4">A slider component for selecting a value from a range.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Slider</h3>
        <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Range Slider</h3>
        <Slider defaultValue={[25, 75]} max={100} step={1} className="w-full" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">With Value Display</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Volume</span>
            <span className="text-sm">75%</span>
          </div>
          <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Disabled</h3>
        <Slider defaultValue={[50]} max={100} step={1} disabled className="w-full" />
      </div>
    </div>
  )
} 