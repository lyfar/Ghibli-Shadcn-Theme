import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LabelShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Label</h2>
        <p className="text-muted-foreground mb-4">A label component for form elements.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Label</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Required Label</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="username" className="after:content-['*'] after:ml-0.5 after:text-destructive">
            Username
          </Label>
          <Input type="text" id="username" placeholder="Username" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">With Helper Text</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" />
          <p className="text-sm text-muted-foreground">Password must be at least 8 characters long.</p>
        </div>
      </div>
    </div>
  )
} 