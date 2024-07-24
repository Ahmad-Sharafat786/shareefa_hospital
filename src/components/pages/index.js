import React from "react";

const NoPage = React.lazy(() => import("./NoPageFound"));
const SignIn = React.lazy(() => import("../pages/Auth/SignIn"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const LandingPage = React.lazy(() => import("./LandingPage"));
const ForgetPassword = React.lazy(() =>
  import("../pages/Auth/Forget-Password")
);
const ResetPassword = React.lazy(() => import("../pages/Auth/Reset-Password"));
const Register = React.lazy(() => import("../pages/Auth/Register"));
const AudioVideoCall = React.lazy(() =>
  import("./AudioVideoCall/Appointments")
);
const Invoices = React.lazy(() => import("./Invoices/Index"));
const Prescription = React.lazy(() => import("./Prescription/Prescription"));
const Appointments = React.lazy(() => import("./Appointments/Index"));
const AppointmentCalender = React.lazy(() =>
  import("./Appointments/AppointmentCalender")
);
const ProfileSetup = React.lazy(() => import("./ProfileSetup/Index"));
const Patients = React.lazy(() => import("./Patients/Patients"));
const Provider = React.lazy(() => import("./Provider/Provider"));
const ProfileView = React.lazy(() => import("./ProfileView/Index"));
const Slots = React.lazy(() => import("./Slots/Index"));
const CreateSlots = React.lazy(() => import("./Slots/NewSlots"));
const AppointmentQueue = React.lazy(() => import("./AppointmentQueue/Index"));
const ArchiveTasks = React.lazy(() => import("./ArchiveTasks/Index"));
const PatientInquiryRestriction = React.lazy(() =>
  import("./PatientInquiryRestriction/Index")
);
const RegisteredPatients = React.lazy(() =>
  import("./RegisteredPatients/RegisterPatientsComp")
);
const ViewDetails = React.lazy(() =>
  import("./RegisteredPatients/ViewDetails/Index")
);
const SoapNotesList = React.lazy(() => import("./SoapNotesList/Index"));
const Chat = React.lazy(() => import("./Chat/Index"));
const CustomPermission= React.lazy(()=> import("./Permissions/Custom/Custom"))
const ApplyPermissions= React.lazy(()=> import("./Permissions/ApplyPermissions/ApplyPermissionsRole"))
const RolesList= React.lazy(()=> import("./Permissions/Roles/Roles"))
const RoleView= React.lazy(()=> import("./Permissions/Roles/RoleView"))
const AddRole= React.lazy(()=> import("./Permissions/Roles/AddRole"))
const BulkRoleAssign= React.lazy(()=> import("./Permissions/Roles/BulkRoleAssign"))

const WEB_PAGES = {
  NOPAGE: NoPage,
  SIGN_IN: SignIn,
  DASHBOARD: Dashboard,
  LANDING_PAGE: LandingPage,
  FORGET_PASSWORD: ForgetPassword,
  RESET_PASSWORD: ResetPassword,
  REGISTER: Register,
  AUDIO_VIDEO: AudioVideoCall,
  INVOICES: Invoices,
  PRESCRIPTION: Prescription,
  APPOINTMENTS: Appointments,
  APPOINTMENT_CALENDAR: AppointmentCalender,
  PROFILE_SETUP: ProfileSetup,
  PATIENTS: Patients,
  PROVIDER: Provider,
  PROFILE_VIEW: ProfileView,
  SLOTS: Slots,
  CREATE_SLOTS: CreateSlots,
  APPOINTMENT_QUEUE: AppointmentQueue,
  ARCHIVE_TASKS: ArchiveTasks,
  PATIENT_INQUIRY: PatientInquiryRestriction,
  REGISTER_PATIENTS: RegisteredPatients,
  VIEW_DETAILS: ViewDetails,
  SOAP_NOTES: SoapNotesList,
  CHAT: Chat,
  CUSTOM_PERMISSION:CustomPermission,
  APPLY_PERMISSION:ApplyPermissions,
  ROLES_LIST:RolesList,
  ROLE_VIEW:RoleView,
  ADD_ROLE:AddRole,
  BULK_ROLE:BulkRoleAssign
  
};

export { WEB_PAGES };
