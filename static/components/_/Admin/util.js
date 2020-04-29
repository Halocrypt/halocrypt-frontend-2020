import { postJSONRequest, getRequest } from "../../../http/requests";
import { admin } from "../../../apiRoutes";

const data = (_) => _.data;

/**
 * @returns {Promise<import('../../../api').AdminRoutes.getLatestQuestion.response['success']['data']>}
 */
export function getLatestQuestionNumber() {
  return getRequest(admin.getLatestQuestionNumber).then(data);
}

export function getAllQuestions() {
  return getRequest(admin.getAllQuestions).then(data);
}

export const Loader = () => "Loading data...";
