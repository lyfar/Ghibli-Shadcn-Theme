"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ChevronDown, Minus, Plus, Send } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function ThemeShowcase() {
  const [date, setDate] = useState<Date | undefined>(new Date(2023, 5, 13)) 
  const [calories, setCalories] = useState(350)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Calendar Card */}
      <Card>
        <CardContent className="p-4 flex justify-center items-center">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </CardContent>
      </Card>

      {/* Goal Setting Card */}
      <Card>
        <CardHeader>
          <CardTitle>Move Goal</CardTitle>
          <CardDescription>Set your daily activity goal.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Button variant="outline" size="icon" onClick={() => setCalories(Math.max(0, calories - 50))}>
              <Minus className="h-4 w-4" />
            </Button>
            <div className="text-center">
              <div className="text-5xl font-bold">{calories}</div>
              <div className="text-xs text-muted-foreground">CALORIES/DAY</div>
            </div>
            <Button variant="outline" size="icon" onClick={() => setCalories(calories + 50)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Set Goal</Button>
        </CardFooter>
      </Card>

      {/* Activity Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Summary</CardTitle>
          <CardDescription>Your weekly activity statistics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Steps</span>
              <div className="flex items-center">
                <span className="font-medium">8,742</span>
                <Badge variant="secondary" className="text-xs text-green-500 ml-2">+12%</Badge>
              </div>
            </div>
            <Progress value={70} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Active Time</span>
              <div className="flex items-center">
                <span className="font-medium">5.2 hours</span>
                <Badge variant="secondary" className="text-xs text-green-500 ml-2">+8%</Badge>
              </div>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Sleep</span>
              <div className="flex items-center">
                <span className="font-medium">7.5 hours</span>
                <Badge variant="secondary" className="text-xs text-red-500 ml-2">-3%</Badge>
              </div>
            </div>
            <Progress value={80} className="h-2" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View Details</Button>
        </CardFooter>
      </Card>

      {/* Team Members Card */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Invite your team members to collaborate.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Sofia Davis</p>
                <p className="text-xs text-muted-foreground">m@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xs mr-2">Owner</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Jackson Lee</p>
                <p className="text-xs text-muted-foreground">p@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xs mr-2">Member</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Isabella Nguyen</p>
                <p className="text-xs text-muted-foreground">i@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xs mr-2">Member</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Card */}
      <Card>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Sofia Davis" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Sofia Davis</p>
              <p className="text-xs text-muted-foreground">m@example.com</p>
            </div>
          </div>

          <p className="text-sm">Hi, how can I help you today?</p>

          <div className="bg-primary text-white p-3 rounded-md text-sm max-w-[80%] ml-auto">
            Hey, I'm having trouble with my account.
          </div>

          <p className="text-sm">What seems to be the problem?</p>

          <div className="bg-primary text-white p-3 rounded-md text-sm max-w-[80%] ml-auto">I can't log in.</div>

          <div className="relative">
            <Input
              type="text"
              placeholder="Type your message..."
              className="pr-10"
            />
            <Button size="icon" className="absolute right-1 top-1 h-7 w-7">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Cookie Settings Card */}
      <Card>
        <CardHeader>
          <CardTitle>Cookie Settings</CardTitle>
          <CardDescription>Manage your cookie settings here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Strictly Necessary</Label>
              <p className="text-xs text-muted-foreground">
                These cookies are essential in order to use the website and use its features.
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Functional Cookies</Label>
              <p className="text-xs text-muted-foreground">
                These cookies allow the website to provide personalized functionality.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Create Account Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Create an account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>

          <Button className="w-full">Sign Up with Email</Button>
        </CardContent>
      </Card>

      {/* Analytics Dashboard Card */}
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>Website traffic overview</CardDescription>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last3months">Last 3 months</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Chart visualization placeholder */}
          <div className="h-[180px] w-full rounded-md border border-dashed flex items-center justify-center">
            <div className="space-y-3 w-full px-4">
              {/* Chart bars */}
              <div className="flex items-end justify-between h-[120px] gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div 
                    key={i}
                    className="bg-primary/80 rounded-t w-full"
                    style={{ 
                      height: `${Math.max(15, Math.floor(Math.random() * 100))}%`,
                      opacity: 0.5 + (i * 0.07)
                    }}
                  />
                ))}
              </div>
              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-muted-foreground">
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Visitors</p>
              <p className="text-2xl font-bold">24,331</p>
              <Badge variant="secondary" className="text-xs text-green-500">+5.2% vs last period</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-2xl font-bold">2.4%</p>
              <Badge variant="secondary" className="text-xs text-red-500">-0.3% vs last period</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payments Card */}
      <Card>
        <CardHeader>
          <CardTitle>Payments</CardTitle>
          <CardDescription>Manage your payment methods and transactions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="14" rx="2" className="stroke-primary" strokeWidth="2" />
                    <line x1="3" y1="10" x2="21" y2="10" className="stroke-primary" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Visa Credit Card</p>
                  <p className="text-xs text-muted-foreground">**** **** **** 4242</p>
                </div>
              </div>
              <Badge>Default</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-md">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="14" rx="2" className="stroke-primary" strokeWidth="2" />
                    <line x1="3" y1="10" x2="21" y2="10" className="stroke-primary" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">UnionPay Debit Card</p>
                  <p className="text-xs text-muted-foreground">**** **** **** 8888</p>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full">Add Payment Method</Button>
        </CardContent>
      </Card>
    </div>
  )
}

