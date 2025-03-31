import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Alert</h2>
        <p className="text-muted-foreground mb-4">An alert component for displaying important messages.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Default Alert</h3>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Alert with Icon</h3>
        <Alert>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-2"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This is an informational alert with an icon.</AlertDescription>
        </Alert>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Alert Variants</h3>
        <div className="space-y-4">
          <Alert className="border-primary bg-primary/10 text-primary">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
          </Alert>

          <Alert className="border-destructive bg-destructive/10 text-destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>There was an error processing your request.</AlertDescription>
          </Alert>

          <Alert className="border-accent bg-accent/10 text-accent">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Your account is approaching its storage limit.</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
} 