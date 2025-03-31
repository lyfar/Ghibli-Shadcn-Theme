import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Tabs</h2>
        <p className="text-muted-foreground mb-4">A tabs component for switching between different views.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Basic Tabs</h3>
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4 border rounded-md mt-2">
            <p>Make changes to your account here.</p>
          </TabsContent>
          <TabsContent value="password" className="p-4 border rounded-md mt-2">
            <p>Change your password here.</p>
          </TabsContent>
          <TabsContent value="settings" className="p-4 border rounded-md mt-2">
            <p>Edit your settings here.</p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Example: Settings Form</h3>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4 border rounded-md mt-2 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="john.doe@example.com" />
            </div>
            <Button>Save Changes</Button>
          </TabsContent>
          <TabsContent value="password" className="p-4 border rounded-md mt-2 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current">Current Password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new">New Password</Label>
              <Input id="new" type="password" />
            </div>
            <Button>Change Password</Button>
          </TabsContent>
          <TabsContent value="notifications" className="p-4 border rounded-md mt-2 space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">Receive emails about new products and features.</p>
                </div>
                <Switch />
              </div>
            </div>
            <Button>Save Preferences</Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 