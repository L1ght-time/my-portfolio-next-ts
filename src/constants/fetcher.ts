export const fetcher = (...args: any[]) => fetch(...(args as [any, any])).then((res) => res.json());
