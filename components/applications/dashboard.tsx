import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, BarChart3, DollarSign, Users } from "lucide-react"
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Cell, ResponsiveContainer } from "recharts"

export function DashboardShowcase() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-card-foreground mb-2">Dashboard</h2>
        <p className="text-muted-foreground mb-4">A dashboard component for displaying key metrics and information.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Overview Dashboard</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Recent Activity</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: 'January', value: 400 },
                      { name: 'February', value: 300 },
                      { name: 'March', value: 600 },
                      { name: 'April', value: 200 },
                      { name: 'May', value: 800 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-3)" opacity={0.3} />
                    <XAxis dataKey="name" stroke="var(--chart-5)" />
                    <YAxis stroke="var(--chart-5)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--chart-4)',
                        borderColor: 'var(--chart-1)',
                        color: 'var(--chart-5)'
                      }}
                    />
                    <Bar dataKey="value" fill="var(--chart-2)" radius={[8, 8, 0, 0]} barSize="50%">
                      {[
                        { name: 'January', value: 400 },
                        { name: 'February', value: 300 },
                        { name: 'March', value: 600 },
                        { name: 'April', value: 200 },
                        { name: 'May', value: 1500 },
                      ].map((_, index) => (
                        <Cell key={`cell-${index}`} fill={`var(--chart-${index+1})`} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center">
                  <Avatar className="h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                    <AvatarFallback>Oc</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                    <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
                <div className="flex items-center">
                  <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                    <AvatarFallback>Jl</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Jackson Lee</p>
                    <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+$39.00</div>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                    <AvatarFallback>In</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                    <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
                  </div>
                  <div className="ml-auto font-medium">+$299.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-card-foreground">Project Status</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Website Redesign</CardTitle>
              <CardDescription>Task completion: 65%</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={65} className="h-2" />
              <div className="mt-4 grid grid-cols-3 text-center text-xs text-muted-foreground">
                <div className="text-left">
                  <p>Start Date</p>
                  <p className="text-foreground">Jan 12</p>
                </div>
                <div>
                  <p>Team</p>
                  <p className="text-foreground">Design</p>
                </div>
                <div className="text-right">
                  <p>Due Date</p>
                  <p className="text-foreground">Mar 15</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Mobile App Development</CardTitle>
              <CardDescription>Task completion: 32%</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={32} className="h-2" />
              <div className="mt-4 grid grid-cols-3 text-center text-xs text-muted-foreground">
                <div className="text-left">
                  <p>Start Date</p>
                  <p className="text-foreground">Feb 05</p>
                </div>
                <div>
                  <p>Team</p>
                  <p className="text-foreground">Development</p>
                </div>
                <div className="text-right">
                  <p>Due Date</p>
                  <p className="text-foreground">Jun 20</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Marketing Campaign</CardTitle>
              <CardDescription>Task completion: 89%</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={89} className="h-2" />
              <div className="mt-4 grid grid-cols-3 text-center text-xs text-muted-foreground">
                <div className="text-left">
                  <p>Start Date</p>
                  <p className="text-foreground">Mar 01</p>
                </div>
                <div>
                  <p>Team</p>
                  <p className="text-foreground">Marketing</p>
                </div>
                <div className="text-right">
                  <p>Due Date</p>
                  <p className="text-foreground">Apr 15</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

