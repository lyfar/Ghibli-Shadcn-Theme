"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ChevronDown, Bell, List } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-[220px] border-r flex flex-col bg-background">
        {/* Logo */}
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="text-primary font-bold text-2xl mr-1">ZFX</div>
          </div>
        </div>

        {/* Main Nav Buttons */}
        <div className="p-4 flex flex-col gap-3">
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              Home
            </span>
          </Button>

          <Button variant="ghost" className="w-full justify-between">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M22 12H2M2 12l7-7M2 12l7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Fund management
            </span>
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button variant="ghost" className="w-full justify-between">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              Partnership
            </span>
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button variant="ghost" className="w-full justify-between">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M20 11A8 8 0 0 0 4 11M20 11C20 16 16 20 12 20S4 16 4 11M20 11C20 7 16 4 12 4S4 7 4 11M12 8v4M12 16.01l.01-.011" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Report
            </span>
            <ChevronDown className="h-4 w-4" />
          </Button>

          <Button variant="ghost" className="w-full justify-between">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1z" fill="currentColor" />
              </svg>
              Personal Information
            </span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* News Section */}
        <div className="mt-6 px-4">
          <h3 className="font-semibold mb-3">News</h3>
          <div className="space-y-3">
            <Card className="overflow-hidden hover:shadow-sm transition-shadow">
              <CardContent className="p-3">
                <p className="font-medium text-sm mb-1">Oil price soars as new regulation...</p>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                  Commodity
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-sm transition-shadow">
              <CardContent className="p-3">
                <p className="font-medium text-sm mb-1">Tesla reveals new Model X engine...</p>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                  Stock
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-sm transition-shadow">
              <CardContent className="p-3">
                <p className="font-medium text-sm mb-1">&quot;SEC vs XRP far from over&quot; according...</p>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                  Crypto
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-sm transition-shadow">
              <CardContent className="p-3">
                <p className="font-medium text-sm mb-1">&quot;Gold is the new standard&quot; says Lord...</p>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                  Commodity
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Top Header */}
        <div className="h-16 border-b bg-white flex items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <div className="text-xs text-muted-foreground">Total balance ⓘ</div>
              <div className="font-semibold">$16,590.40</div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-muted-foreground">Equity</div>
              <div className="font-semibold">$16,590.40</div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs text-muted-foreground">E-wallet</div>
              <div className="font-semibold">$16,590.40</div>
            </div>
            <Button variant="ghost" size="icon" className="ml-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8v4M12 16h.01" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm">Hi User</span>
              <Badge variant="destructive" className="text-xs">Not certified</Badge>
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <List className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4 mx-auto w-full max-w-5xl space-y-5">
          {/* Action Buttons */}
          <div className="flex gap-4 mb-2">
            <Button className="bg-primary hover:bg-primary/90">
              <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor" />
              </svg>
              Deposit
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download MT4
            </Button>
          </div>

          {/* Marketing Banner */}
          <Card className="bg-red-500 text-white border-0">
            <CardContent className="flex items-center justify-center p-5">
              <p className="text-xl font-medium">Marketing banner</p>
            </CardContent>
          </Card>

          {/* Welcome Card */}
          <Card className="bg-sky-50 border-sky-100">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Welcome User!</h2>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Total balance ⓘ</span>
                    <span className="text-2xl font-bold">$16,590.40</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-muted-foreground">24h P&L ⓘ</span>
                  <span className="text-2xl font-bold text-green-600">+$16,590.40 (+24.21%)</span>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button className="bg-primary text-white hover:bg-primary/90">Deposit</Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">Withdraw</Button>
              </div>
            </CardContent>
          </Card>

          {/* Onboarding Banner */}
          <Card className="bg-red-500 text-white border-0">
            <CardContent className="flex items-center justify-center p-5">
              <p className="text-xl font-medium">Onboarding Banner (if user is not fully verified)</p>
            </CardContent>
          </Card>

          {/* Accounts Section */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Accounts</h2>
            </div>
            
            <Tabs defaultValue="live" className="mb-4">
              <TabsList>
                <TabsTrigger value="live">Live</TabsTrigger>
                <TabsTrigger value="demo">Demo</TabsTrigger>
                <TabsTrigger value="disabled">Disabled</TabsTrigger>
              </TabsList>
            </Tabs>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead>Balance (USD)</TableHead>
                    <TableHead>Free margin (USD)</TableHead>
                    <TableHead>Equity (USD)</TableHead>
                    <TableHead>Leverage</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">Risk level 1000</div>
                        <div className="flex gap-1 mt-1">
                          <Badge className="text-xs bg-primary text-white">Live</Badge>
                          <Badge className="text-xs bg-gray-600 text-white">MT5</Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>1:30</TableCell>
                    <TableCell>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Deposit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">WAGMI</div>
                        <div className="flex gap-1 mt-1">
                          <Badge className="text-xs bg-primary text-white">Live</Badge>
                          <Badge className="text-xs bg-gray-600 text-white">MT5</Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>1:30</TableCell>
                    <TableCell>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Deposit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">Training</div>
                        <div className="flex gap-1 mt-1">
                          <Badge className="text-xs bg-primary text-white">Live</Badge>
                          <Badge className="text-xs bg-gray-600 text-white">MT5</Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>1:30</TableCell>
                    <TableCell>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Deposit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">All in</div>
                        <div className="flex gap-1 mt-1">
                          <Badge className="text-xs bg-primary text-white">Live</Badge>
                          <Badge className="text-xs bg-gray-600 text-white">MT5</Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell>1:30</TableCell>
                    <TableCell>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Deposit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
            <div className="flex justify-end mt-4">
              <Button className="gap-2 bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                New account
              </Button>
            </div>
          </div>

          {/* Trading Symbols Section */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Trading Symbols</h2>
            </div>
            
            <Tabs defaultValue="popular" className="mb-4">
              <TabsList>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="gainers">Gainers</TabsTrigger>
                <TabsTrigger value="losers">Losers</TabsTrigger>
              </TabsList>
            </Tabs>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Price (USD)</TableHead>
                    <TableHead>Daily Change</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">BTC</div>
                        <Badge className="text-xs bg-primary text-white mt-1">Crypto</Badge>
                      </div>
                    </TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell className="text-green-600">+20.90%</TableCell>
                    <TableCell>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Trade</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">Gold</div>
                        <Badge className="text-xs bg-primary text-white mt-1">Commodity</Badge>
                      </div>
                    </TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell className="text-red-600">-8.65%</TableCell>
                    <TableCell>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Trade</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">Tesla</div>
                        <Badge className="text-xs bg-primary text-white mt-1">Stock</Badge>
                      </div>
                    </TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell className="text-green-600">+3.23%</TableCell>
                    <TableCell>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Trade</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">ETH</div>
                        <Badge className="text-xs bg-primary text-white mt-1">Crypto</Badge>
                      </div>
                    </TableCell>
                    <TableCell>40,000.00</TableCell>
                    <TableCell className="text-red-600">-6.87%</TableCell>
                    <TableCell>
                      <Button className="bg-primary hover:bg-primary/90 text-white">Trade</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
            <div className="flex justify-center mt-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 