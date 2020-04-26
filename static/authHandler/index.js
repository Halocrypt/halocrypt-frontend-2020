import { postJSONRequest, getRequest } from "../http/requests";
import { appEvents } from "../globalStore/index";
import { user } from "../apiRoutes";

class Authy {
  state = { checkedAuth: false };
  /**
   * @param {import("../api").UserRoutes.authenticate.request} props
   */
  async auth(props) {
    /** @type {import('../api').UserRoutes.authenticate.response['error']} */
    const resp = await postJSONRequest(user.authenticate, props);
    if (resp.error != null) {
      return resp;
    }
    /**@type {import('../api').UserRoutes.authenticate.response['success']['data']} */
    const data = resp.data;
    appEvents.set("userData", data.user_data);
    this.state.checkedAuth = true;
    return data;
  }
  async checkAuth() {
    let isLoggedIn = appEvents.getStore().isLoggedIn;
    if (this.state.checkedAuth || isLoggedIn) {
      this.state.checkedAuth = true;
      return isLoggedIn;
    }
    /** @type {import('../api').UserRoutes.checkAuth.response['success']} */
    this.state.checkedAuth = true;
    const f = await getRequest(user.checkAuth);
    const data = f.data;
    if (!data.error) {
      appEvents.set("userData", data.user_data);
      return data;
    }
    return false;
  }
  logout() {
    appEvents.set("userData", null);
    return postJSONRequest(user.logout, {});
  }
  /** @param {import("../api").UserRoutes.create.request} props */
  async createAccount(props) {
    /** @type {import('../api').UserRoutes.authenticate.response['error']} */
    const resp = await postJSONRequest(user.createAccount, props);
    if (resp.error != null) {
      return resp;
    }
    /**@type {import('../api').UserRoutes.create.response['success']['data']} */
    const data = resp.data;
    return data;
  }
}

export const handler = new Authy();

console.log(handler);
