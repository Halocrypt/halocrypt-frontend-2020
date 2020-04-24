import { userData } from "../api";
export type Store = {
  isLoggedIn?: boolean;
  userData?: userData;
  currentTheme?: "";
  eventBegan?: boolean;
  eventBeginTimeStamp?: number;
};
