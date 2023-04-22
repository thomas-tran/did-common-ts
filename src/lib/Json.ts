/**
 * Represents a JSON object.
 */
export interface JSONObject {
  [x: string]: JSONValue;
}

/**
 * Represents a JSON value that can be a string, number, boolean, JSON object, or JSON array.
 */
export type JSONValue = string | number | boolean | JSONObject | JSONArray;

/**
 * Represents a JSON array.
 */
export type JSONArray = Array<JSONValue>;

function sortJSONArray(value: JSONArray): JSONArray {
  if (!value || value.length == 0) return value;

  return Array.from(value, (v) => {
    if (typeof v === "object" && Object.keys(v).length > 0 && !Array.isArray(v))
      return sortJSONObject(v);
    else if (Array.isArray(v) && value.length > 0) return sortJSONArray(v);
    else return v;
  });
}

export function sortJSONObject(obj: JSONObject): JSONObject {
  const keys = Object.keys(obj);
  keys.sort((key1, key2) => {
    // return key1.localeCompare(key2, "en", {sensitivity: 'variant', caseFirst: "upper"});
    if (key1 < key2) return -1;
    if (key1 > key2) return 1;
    return 0;
  });

  const sortedObj: JSONObject = {};

  for (const index in keys) {
    const key = keys[index];
    const value = obj[key];
    if (
      typeof value === "object" &&
      Object.keys(value).length > 0 &&
      !Array.isArray(value)
    ) {
      // Objects with properties only.
      sortedObj[key] = sortJSONObject(value as JSONObject);
    } else if (Array.isArray(value) && value.length > 0) {
      sortedObj[key] = sortJSONArray(value);
    } else {
      sortedObj[key] = value;
    }
  }

  return sortedObj;
}
