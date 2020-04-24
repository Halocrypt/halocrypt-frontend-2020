import { getRequest, postJSONRequest } from "../http/requests";
import { appEvents } from "../globalStore/index";
import { user } from "../apiRoutes";
class Authy {
  /**
   * @param {import("../api").ApiRoutes.user.authenticate.request} props
   */
  async auth(props) {
    /** @type {import('../api').ApiRoutes.user.authenticate.response['error']} */
    const resp = await postJSONRequest(user.authenticate, props);
    if (resp.error != null) {
      return resp.error;
    }
    /**@type {import('../api').ApiRoutes.user.authenticate.response['success']['data']} */
    const data = resp.data;
    appEvents.set("userData", data);
    return data;
  }
}

export const handler = new Authy();
