/* istanbul ignore file */
import { createContext, ReactNode, useReducer } from "react";
import { EventContextType } from "types/eventEmitter";

export const EventContext = createContext<EventContextType | undefined>(
  undefined
);

export const ACTIONS = {
  LOADING_EVENT: "LOADING_EVENT",
  LOAD_INFO_BREADCRUMB: "LOAD_INFO_BREADCRUMB",
};

const initialState = {
  loading: false,
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
    case ACTIONS.LOAD_INFO_BREADCRUMB:
      return {
        ...state,
        bestCategory: action.payload.bestCategory,
        filters: action.payload.filters,
        availableFilters: action.payload.availableFilters,
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
