/* istanbul ignore file */
import { EventContext } from "context/EventContext";
import { useContext } from "react";

export const useEventEmitter = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventEmitter debe usarse dentro de un EventProvider");
  }
  return context;
};
