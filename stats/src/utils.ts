export const dateStringToDate = (dateString: string): Date => {
  // 11/11/2011
  const dateParts = dateString
    .split('/')
    .map((value: string): number => {
      return parseInt(value);
    });

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}

export const add = (a: number, b: number): number => {
  return a + b;
}
