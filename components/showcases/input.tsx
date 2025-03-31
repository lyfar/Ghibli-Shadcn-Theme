import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Input</h2>
        <p className="text-muted-foreground mb-4">An input component for collecting user data.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Input</h3>
        <Input placeholder="Enter your name" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">With Label</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Disabled</h3>
        <Input disabled placeholder="Disabled input" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">With Icon</h3>
        <div className="relative">
          <Input placeholder="Search..." className="pl-8" />
          <svg
            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

