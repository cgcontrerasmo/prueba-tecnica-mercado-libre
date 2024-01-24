export type EventContextType = {
  events: any;
  emitEvent: (eventType: string, payload?: any) => void;
};
