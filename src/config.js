const ERROR = {
  SYSTEM_ERROR: "System error. Please try again later!",
};

const PATH = {
  NOPAGE: "*",
  SIGN_IN: "/",
  DASHBOARD: "/dashboard",
  LANDING_PAGE: "/landing-page",
  FORGET_PASSWORD: "/forget-password",
  RESET_PASSWORD: "/reset-password",
  REGISTER: "/register",
  AUDIO_VIDEO: "/audio-video",
  INVOICES: "/invoices",
  PRESCRIPTION: "/prescription",
  APPOINTMENTS: "/appointments",
  APPOINTMENT_CALENDAR: "/appointments/calendar",
  PROFILE_SETUP: "/profile",
  PATIENTS: "/patients",
  PROVIDER: "/provider",
  PROFILE_VIEW: "/profile-view",
  SLOTS: "/slots",
  CREATE_SLOTS: "/slots/create_new",
  APPOINTMENT_QUEUE: "/apointments/appointment-queue",
  ARCHIVE_TASKS: "/archive-tasks",
  PATIENT_INQUIRY: "/patient-inquiry",
  REGISTER_PATIENTS: "/registered-patients",
  VIEW_DETAILS: "/view-details",
  SOAP_NOTES: "/soap-notes",
  CHAT: "/chat",
  CUSTOM_PERMISSION: "/custom-permission",
  APPLY_PERMISSION: "/apply-permission",
  ROLES_LIST: "/roles-list",
  ROLE_VIEW: "/role-view",
  ADD_ROLE: "/add-role",
  BULK_ROLE: "/bulk-role"
};

const APP_SETTINGS = {
  API_PATH: {
    ACCOUNT: {
      getToken: "Account/GetToken",
    },
  },
};

const AZURE_BLOB_BASE_URL = "blob_url_here";

const ROLE = {
  ADMIN1: 1,
  ADMIN2: 2,
  ADMIN3: 3,
};

const TOASTER_STYLING_VALUES = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const PAGINATION_PAGE_SIZE = 10;

export {
  ERROR,
  PATH,
  APP_SETTINGS,
  ROLE,
  TOASTER_STYLING_VALUES,
  AZURE_BLOB_BASE_URL,
  PAGINATION_PAGE_SIZE,
};
