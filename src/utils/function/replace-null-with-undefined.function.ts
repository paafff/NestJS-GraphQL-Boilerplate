export const replaceNullWithUndefined = <T>(input: T): T | undefined => {
  if (input === null) {
    return undefined;
  }

  input = JSON.parse(JSON.stringify(input));

  if (isObject(input)) {
    const result: Record<string, any> = {};

    let hasNonNullProperty = false;
    for (const [key, value] of Object.entries(input)) {
      const processedValue = replaceNullWithUndefined(value);
      if (processedValue !== undefined) {
        hasNonNullProperty = true;
      }
      result[key] = processedValue;
    }

    return hasNonNullProperty ? (result as T) : undefined;
  }

  if (Array.isArray(input)) {
    const processedArray = (input as unknown[]).map(replaceNullWithUndefined);
    return processedArray.some((item) => item !== undefined)
      ? (processedArray as T)
      : undefined;
  }

  return input;
};

const isObject = (value: unknown): value is Record<string, any> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};
