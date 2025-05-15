export const assertValue = <T>(value: T | undefined, message: string): T => {
  if (value === undefined) {
    throw new Error(message);
  }

  return value;
};
