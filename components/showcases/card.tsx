import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CardShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Card</h2>
        <p className="text-muted-foreground mb-4">A card component for displaying content in a contained manner.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Card</h3>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Example: Profile Card</h3>
        <Card>
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">
                  Full-stack developer with 5 years of experience in React and Node.js.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">View Profile</Button>
            <Button>Contact</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Example: Notification Card</h3>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>New Message</CardTitle>
            <CardDescription>You have a new message from Sarah</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Hi there! Just wanted to check in and see how the project is going. Let me know if you need any help.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="ghost" size="sm">
              Dismiss
            </Button>
            <Button size="sm">Reply</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 