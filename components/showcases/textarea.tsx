import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Textarea</h2>
        <p className="text-muted-foreground mb-4">A textarea component for collecting multi-line text input.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Textarea</h3>
        <Textarea placeholder="Type your message here." />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">With Label</h3>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Disabled</h3>
        <Textarea placeholder="This textarea is disabled." disabled />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">With Description</h3>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea placeholder="Tell us about yourself" id="bio" />
          <p className="text-sm text-muted-foreground">Your bio will be displayed on your public profile.</p>
        </div>
      </div>
    </div>
  )
} 