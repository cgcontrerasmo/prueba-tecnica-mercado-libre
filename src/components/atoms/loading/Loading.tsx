import { useEffect, useState } from "react";
import "./Loading.scss";
import { useEventEmitter } from "hooks/useEventEmitter";

const Loading = () => {
  const [loading, setLoading] = useState(false);
  const { subscribe } = useEventEmitter();

  const unsubscribe = subscribe("EMIT_EVENT_LOADING", (payload) => {
    console.log("Evento recibido en ComponentB:", payload);
    setLoading(payload.loading);
  });

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, [unsubscribe]);

  return loading ? (
    <div className="loading">
      <div className="loading__spinner"></div>
      <p>Cargando...</p>
    </div>
  ) : (
    <></>
  );
};

export default Loading;
