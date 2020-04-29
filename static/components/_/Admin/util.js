import { postJSONRequest, getRequest } from "../../../http/requests";
import { admin } from "../../../apiRoutes";

/**
 * @returns {Promise<import('../../../api').AdminRoutes.getLatestQuestion.response['success']['data']>}
 */
export function getLatestQuestionNumber() {
  return getRequest(admin.getLatestQuestionNumber).then((_) => _.data);
}
