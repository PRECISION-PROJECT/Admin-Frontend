import { IAppointment } from "@/apis/appointments";
import { Icons } from "@/assets/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import React from "react";
import {
  AppointmentStatus,
  AppointmentUserRole,
} from "../../contexts/appointments-list-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  appointment: IAppointment;
  onClose: () => void;
  onUpdate: () => void;
  onCancel: () => void;
};

const getStatusColor = (status: AppointmentStatus) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "cancelled":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const getRoleColor = (role: AppointmentUserRole) => {
  switch (role) {
    case "ADMIN":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "USER":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const getInitials = (firstName: string, lastName: string) => {
  if (!firstName && !lastName) return "-";
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

const ViewAppointmentDialogUI = ({
  appointment,
  onClose,
  onUpdate,
  onCancel,
}: Props) => {
  const formattedDateTime = format(
    new Date(appointment?.dateTime),
    "MMM d, yyyy h:mm a"
  );
  const formattedCreatedAt = format(
    new Date(appointment?.createdAt),
    "MMM d, yyyy h:mm a"
  );
  const formattedUpdatedAt = format(
    new Date(appointment?.updatedAt),
    "MMM d, yyyy h:mm a"
  );
  return (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto">
      {/* Customer Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icons.userCircle className="h-5 w-5" />
            Customer Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Name
              </label>
              <p className="text-sm">{appointment?.customerName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Phone
              </label>
              <p className="text-sm flex items-center gap-2">
                <Icons.phone className="h-4 w-4" />
                {appointment?.customerPhone}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Email
              </label>
              <p className="text-sm flex items-center gap-2">
                <Icons.mail className="h-4 w-4" />
                {appointment?.customerEmail}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Service Address
              </label>
              <p className="text-sm flex items-center gap-2">
                <Icons.mapPin className="h-4 w-4" />
                {appointment?.serviceAddress}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appointment Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icons.calendar className="h-5 w-5" />
            Appointment Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Service Type
              </label>
              <p className="text-sm capitalize">
                {appointment?.serviceType ?? "-"}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Date & Time
              </label>
              <p className="text-sm flex items-center gap-2">
                <Icons.calendarDays className="h-4 w-4" />
                {formattedDateTime}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Estimated Duration
              </label>
              <p className="text-sm flex items-center gap-2">
                <Icons.clock className="h-4 w-4" />
                {appointment?.estimatedDuration ?? "-"} minutes
              </p>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Notes
            </label>
            <p className="text-sm flex items-start gap-2 mt-1">
              <Icons.file className="h-4 w-4 mt-0.5" />
              {appointment?.notes || (
                <span className="text-muted-foreground italic">
                  No notes provided
                </span>
              )}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Assigned User */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icons.user className="h-5 w-5" />
            Assigned User
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={appointment?.user?.imageUrl || "/placeholder.svg"}
                alt={`${appointment?.user?.firstName} ${appointment?.user?.lastName}`}
              />
              <AvatarFallback>
                {getInitials(
                  appointment?.user?.firstName,
                  appointment?.user?.lastName
                )}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">
                  {appointment?.user?.firstName ?? "-"}{" "}
                  {appointment?.user?.lastName ?? "-"}
                </h4>
                <Badge
                  className={getRoleColor(
                    appointment?.user?.role as AppointmentUserRole
                  )}
                >
                  {appointment?.user?.role ?? "-"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Icons.mail className="h-4 w-4" />
                {appointment?.user?.email ?? "-"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Metadata */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icons.hash className="h-5 w-5" />
            System Metadata
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                Appointment ID
              </label>
              <p className="text-sm font-mono">{appointment?.id}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Created At
                </label>
                <p className="text-sm">{formattedCreatedAt}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Updated At
                </label>
                <p className="text-sm">{formattedUpdatedAt}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center gap-2 mb-4">
        <Button variant="outline" type="button" onClick={onUpdate}>
          Update Appointment
        </Button>
        <Button
          variant="destructive"
          disabled={appointment?.status === "cancelled"}
          type="button"
          onClick={onCancel}
        >
          Cancel Appointment
        </Button>
        <Button variant="secondary" type="button" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default ViewAppointmentDialogUI;
