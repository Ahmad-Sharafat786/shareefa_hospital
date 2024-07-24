import React from "react";
import { PATH } from "../../config";
import { RxDashboard } from "react-icons/rx";
import { LiaUserCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { SlUserFollow } from "react-icons/sl";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <RxDashboard size={18} />,
    path: PATH.DASHBOARD,
    pathList: [PATH.DASHBOARD],
   
  },
  {
    title: "Patient",
    path: PATH.PATIENTS,
    icon: <SlUserFollow size={18} />,
  },

  {
    title: "Video Call",
    path: PATH.AUDIO_VIDEO,
    icon: <SlUserFollow size={18} />,
  },
  {
    title: "Provider",
    path: PATH.PROVIDER,
    icon: <FaUserDoctor size={18} />,
  },
  {
    title: "Profile",
    path: PATH.PROFILE_SETUP,
    icon: <CgProfile size={18} />,
  },
  {
    title: "My Appointment",
    path: PATH.APPOINTMENTS,
    icon: <IoCalendarOutline size={18} />,
  },
  {
    title: <div className="sidebar-span-style">Book an Appointment</div>,
    path: PATH.APPOINTMENT_CALENDAR,
    icon: <IoCalendarOutline size={22} />,
  },
  {
    title: "Prescription",
    path: PATH.PRESCRIPTION,
    icon: <GrNotes size={18} />,
  },
  {
    title: "Invoices",
    path: PATH.INVOICES,
    icon: <GrNotes size={18} />,
  },
  {
    title: "Tasks",
    path: PATH.ARCHIVE_TASKS,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title: "Slots",
    path: PATH.SLOTS,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title:  <div className="sidebar-span-style">Appointment Queue</div>,
    path: PATH.APPOINTMENT_QUEUE,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title: "Patient Enquiry",
    path: PATH.PATIENT_INQUIRY,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title: "Register Patients",
    path: PATH.REGISTER_PATIENTS,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title: "Patient Details",
    path: PATH.VIEW_DETAILS,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title: "Soap Notes",
    path: PATH.SOAP_NOTES,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title: "Chat",
    path: PATH.CHAT,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title: <div className="sidebar-span-style">Custom Permission</div>,
    path: PATH.CUSTOM_PERMISSION,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title:  <div className="sidebar-span-style">Apply Permissions</div>,
    path: PATH.APPLY_PERMISSION,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title: <div className="sidebar-span-style">Roles List</div>,
    path: PATH.ROLES_LIST,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
  {
    title: "Bulk Role",
    path: PATH.BULK_ROLE,
    icon: <LiaFileInvoiceSolid size={22} />,
  },
];
