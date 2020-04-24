import { UserData } from "../api";
export type Store = {
  isLoggedIn?: boolean;
  userData?: UserData;
  currentTheme?: "";
  eventBegan?: boolean;
  eventBeginTimeStamp?: number;
};
