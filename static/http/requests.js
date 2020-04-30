import assign from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/assign";
import retry from "@hydrophobefireman/j-utils/@build-modern/src/modules/retry/index";
import urlencode from "@hydrophobefireman/j-utils/@build-modern/src/modules/urlencode";
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
  const sendHeaders = assign({}, headers || {});
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
  const u = new URL(url);
  const params = u.searchParams;
  params.set("crs", defaultHeaders["x-halocrypt-origin"]);
  u.search = params.toString(); //?
  return fetchRequest(u.toString(), headers, options, "get");
}
export function postJSONRequest(url, data, headers) {
  assign(data, defaultHeaders);
  const js = urlencode(data);
  const options = { body: js };
  const hdr = assign({}, headers);
  hdr["content-type"] = "application/x-www-form-urlencoded";
  return fetchRequest(url, hdr, options, "post");
}
