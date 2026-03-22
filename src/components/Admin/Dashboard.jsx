"use client";

import { useState } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Users, Activity, DollarSign, Eye, CalendarCheck } from "lucide-react";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { RevenueChart } from "@/components/ui/revenue-chart";
import { UsersTable } from "@/components/ui/users-table";
import { QuickActions } from "@/components/ui/quick-actions";
import { SystemStatus } from "@/components/ui/system-status";
import { RecentActivity } from "@/components/ui/recent-activity";
import { DashboardHeader } from "@/components/ui/dashboard-header";
import { AdminSidebar } from "@/components/ui/admin-sidebar";

// Dashboard stats data
const stats = [
  {
    title: "Students",
    value: "320",
    change: "+12%",
    changeType: "positive",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    subtitle: "Total Students",
    total: "694",
  },
  {
    title: "Events",
    value: "45",
    change: "+8.2%",
    changeType: "positive",
    icon: CalendarCheck,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    subtitle: "Total Events",
    total: "120",
  },
];

export default function AdminDashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  const handleExport = () => {
    console.log("Exporting data...");
  };

  const handleAddUser = () => {
    console.log("Adding new user...");
  };

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <DashboardHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onRefresh={handleRefresh}
          onExport={handleExport}
          isRefreshing={isRefreshing}
        />

        <div className="flex flex-1 flex-col gap-2 p-2 pt-0 sm:gap-4 sm:p-4">
          <div className="min-h-[calc(100vh-4rem)] flex-1 rounded-lg p-3 sm:rounded-xl sm:p-4 md:p-6">
            <div className="mx-auto max-w-6xl space-y-4 sm:space-y-6">
              <div className="px-2 sm:px-0">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Welcome Admin
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Update Student Points & View Analytics.
                </p>
              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 md:gap-8 justify-center items-stretch">
                {/* Stats Cards */}
                <div className="w-full grid gap-3 grid-cols-2 sm:gap-4">
                  {stats.map((stat, index) => (
                    <DashboardCard key={stat.title} stat={stat} index={index} />
                  ))}
                </div>

                {/* Main Content Grid */}
                <div className="w-full grid grid-cols-1 gap-4 sm:gap-6 ">
                  {/* Charts Section */}
                  <RevenueChart />

                  {/* Sidebar Section */}
                  {/* <div className="space-y-4 sm:space-y-6">
                  <QuickActions
                  onAddUser={handleAddUser}
                  onExport={handleExport}
                  />
                  <SystemStatus />
                  <RecentActivity />
                  </div> */}
                </div>
              </div>
              <UsersTable onAddUser={handleAddUser} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
