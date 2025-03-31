import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Radio Group</h2>
        <p className="text-muted-foreground mb-4">A radio group component for selecting a single option from a list.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Radio Group</h3>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Disabled</h3>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="disabled-one" disabled />
            <Label htmlFor="disabled-one" className="opacity-70">
              Disabled Option
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="disabled-two" />
            <Label htmlFor="disabled-two">Enabled Option</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Horizontal Layout</h3>
        <RadioGroup defaultValue="option-one" className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="horizontal-one" />
            <Label htmlFor="horizontal-one">Small</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="horizontal-two" />
            <Label htmlFor="horizontal-two">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="horizontal-three" />
            <Label htmlFor="horizontal-three">Large</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

