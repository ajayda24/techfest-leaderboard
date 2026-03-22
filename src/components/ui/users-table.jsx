"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Plus,
  Calendar,
  Mail,
  MapPin,
  MoreHorizontal,
  Clock,
  Tag,
  CalendarCheck,
} from "lucide-react";
const users = [
  {
    id: 1,
    name: "Alex Johnson",
    department: "CSE",
    joinDate: "2024-01-15",
    joinTime: "09:30",
    regId: "REG001",
    eventName: "Tech Fest 2024",
  },
  {
    id: 2,
    name: "Sarah Chen",
    department: "ECE",
    joinDate: "2024-02-20",
    joinTime: "10:00",
    regId: "REG002",
    eventName: "Tech Fest 2024",
  },
  {
    id: 3,
    name: "Michael Brown",
    department: "ME",
    joinDate: "2024-01-08",
    joinTime: "11:00",
    regId: "REG003",
    eventName: "Tech Fest 2024",
  },
];
export const UsersTable = memo(({ onAddUser }) => {
  return (
    <div className="border-border bg-card/40 rounded-xl border p-3 sm:p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-semibold sm:text-xl">Score Board</h3>
          <p className="text-muted-foreground text-sm">
            Manage students and keep track of their points here.
          </p>
        </div>
        <div className="flex w-full max-w-xs items-center gap-2">
          <Button
            variant="outline"
            size="lg"
            className="w-full  bg-sky-100 hover:bg-sky-200 text-sky-900 border-sky-300 hover:border-sky-400"
            onClick={onAddUser}
          >
            <Plus className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Add User</span>
            <span className="sm:hidden">Add</span>
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group hover:bg-accent/50 flex flex-col items-start gap-4 rounded-lg p-4 transition-colors sm:flex-row sm:items-center"
          >
            <div className="flex w-full items-center gap-4 ">
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="truncate text-sm font-medium">
                      {user.name}
                    </h4>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-500`}
                    >
                      {user.department}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-muted-foreground flex items-center gap-1 text-xs">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {new Date(user.joinDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1 text-xs">
                      <Clock className="h-3 w-3" />
                      <span>{user.joinTime}</span>
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground mt-1 flex flex-col gap-2 text-xs ">
                  <div className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    <span className="truncate">{user.regId}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarCheck className="h-3 w-3" />
                    <span>{user.eventName}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});
UsersTable.displayName = "UsersTable";
