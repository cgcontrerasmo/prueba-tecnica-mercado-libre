import { createContext, ReactNode, useReducer } from "react";
import { EventContextType } from "types/eventEmitter";

export const EventContext = createContext<EventContextType | undefined>(
  undefined
);

export const ACTIONS = {
  LOADING_EVENT: "LOADING_EVENT",
};

const initialState = {
  loading: false,
  ruta: "",
};

type InitialStateType = typeof initialState;

const eventReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ACTIONS.LOADING_EVENT:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};

export const EventProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);

  const emitEvent = (eventType: string, payload: InitialStateType) => {
    dispatch({
      type: eventType,
      payload,
    });
  };

  const contextValue: EventContextType = {
    events: state,
    emitEvent,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};
