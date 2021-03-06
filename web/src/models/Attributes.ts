export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] | string => {
    return this.data[key];
  }

  getAll(): T {
    return this.data;
  }

  set(props: T): void {
    Object.assign(this.data, props);
  }
}
