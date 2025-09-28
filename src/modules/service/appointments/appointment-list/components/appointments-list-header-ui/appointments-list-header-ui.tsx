"use client";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useAppointmentsList } from "../../contexts/appointments-list-context";

const AppointmentsListHeaderUI = () => {
  const { setOpen } = useAppointmentsList();
  return (
    <div className="flex items-start justify-between">
      <Heading
        title="Appointments"
        description="Manage the client appointments"
      />
      
        <Button
          size="default"
          className="space-x-1"
          onClick={() => setOpen("add")}
        >
          <span>Add An Appointment</span> <Icons.userPlusIcon size={18} />
        </Button>
    </div>
  );
};

export default AppointmentsListHeaderUI;
