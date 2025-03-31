import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Switch</h2>
        <p className="text-muted-foreground mb-4">
          A switch component for toggling between enabled and disabled states.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Switch</h3>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Checked by Default</h3>
        <div className="flex items-center space-x-2">
          <Switch id="wifi" defaultChecked />
          <Label htmlFor="wifi">Wi-Fi</Label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Disabled</h3>
        <div className="flex items-center space-x-2">
          <Switch id="disabled-switch" disabled />
          <Label htmlFor="disabled-switch" className="opacity-70">
            Disabled
          </Label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Disabled & Checked</h3>
        <div className="flex items-center space-x-2">
          <Switch id="disabled-checked" disabled defaultChecked />
          <Label htmlFor="disabled-checked" className="opacity-70">
            Disabled & Checked
          </Label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Switch Group</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="bluetooth">Bluetooth</Label>
            <Switch id="bluetooth" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Notifications</Label>
            <Switch id="notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="location">Location Services</Label>
            <Switch id="location" />
          </div>
        </div>
      </div>
    </div>
  )
} 