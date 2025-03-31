import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Checkbox</h2>
        <p className="text-muted-foreground mb-4">A checkbox component for selecting multiple options.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Checkbox</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Disabled</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <label
            htmlFor="disabled"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled checkbox
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Checked & Disabled</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="checked-disabled" disabled defaultChecked />
          <label
            htmlFor="checked-disabled"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Checked and disabled
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Checkbox Group</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="option1" />
            <label
              htmlFor="option1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option2" defaultChecked />
            <label
              htmlFor="option2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              SMS
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option3" />
            <label
              htmlFor="option3"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Push notification
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

