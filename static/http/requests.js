import assign from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/assign";
import retry from "@hydrophobefireman/j-utils/@build-modern/src/modules/retry/index";

/** ty CORS */
const defaultHeaders = {
  "x-halocrypt-origin":
    location.origin ||
    document.origin ||
    `${location.protocol}//${location.host}`,
};
const initDict = { credentials: "include" };
const func = retry(fetch, 3, 100);
async function fetchRequest(url, headers, options = {}, method) {
  const sendHeaders = assign({}, headers || {}, defaultHeaders);
  const sendOptions = assign({}, initDict, options);
  const req = new Request(url, {
    method: method,
    headers: sendHeaders,
    ...sendOptions,
  });
  try {
    const resp = await func(req);
    return await resp.json();
  } catch (e) {
    return { error: "Unknown error" };
  }
}

/**
 * @returns {Promise<{}>}
 * @param {string} url
 * @param {{}} headers
 * @param {RequestInit} options
 */
export function getRequest(url, headers, options) {
  return fetchRequest(url, headers, options, "get");
}
export function postJSONRequest(url, data, headers) {
  const js = JSON.stringify(data);
  const options = { body: js };
  const hdr = assign({}, headers);
  hdr["content-type"] = "application/json";
  return fetchRequest(url, hdr, options, "post");
}
