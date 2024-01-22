import { createContext, ReactNode } from "react";
import { EventContextType } from "types/eventEmitter";

export const EventContext = createContext<EventContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const EventProvider = ({ children }: Props) => {
  const subscribers: Record<string, ((payload?: any) => void)[]> = {};

  const emitEvent = (eventType: string, payload?: any) => {
    const callbacks = subscribers[eventType] || [];
    callbacks.forEach((callback) => callback(payload));
  };

  const subscribe = (eventType: string, callback: (payload?: any) => void) => {
    subscribers[eventType] = [...(subscribers[eventType] || []), callback];

    return () => {
      subscribers[eventType] =
        subscribers[eventType]?.filter((cb) => cb !== callback) || [];
    };
  };

  const contextValue: EventContextType = {
    emitEvent,
    subscribe,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};
