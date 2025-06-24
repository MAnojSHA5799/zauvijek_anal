import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative h-4 w-full overflow-hidden rounded-full bg-muted", className)}
        {...props}
      >
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${(value || 0) / max * 100}%` }}
        />
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress }
