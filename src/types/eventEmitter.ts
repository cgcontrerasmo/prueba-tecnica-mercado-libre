export type EventContextType = {
  emitEvent: (eventType: string, payload?: any) => void;
  subscribe: (
    eventType: string,
    callback: (payload?: any) => void
  ) => () => void;
};
