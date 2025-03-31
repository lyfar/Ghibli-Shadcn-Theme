import { Progress } from "@/components/ui/progress"

export function ProgressShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Progress</h2>
        <p className="text-muted-foreground mb-4">
          A progress component for displaying the completion status of a task.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Progress</h3>
        <Progress value={33} className="w-full" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Different Values</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">25%</span>
            <span className="text-sm">1/4 Complete</span>
          </div>
          <Progress value={25} className="w-full" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">50%</span>
            <span className="text-sm">2/4 Complete</span>
          </div>
          <Progress value={50} className="w-full" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">75%</span>
            <span className="text-sm">3/4 Complete</span>
          </div>
          <Progress value={75} className="w-full" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">100%</span>
            <span className="text-sm">Completed</span>
          </div>
          <Progress value={100} className="w-full" />
        </div>
      </div>
    </div>
  )
} 