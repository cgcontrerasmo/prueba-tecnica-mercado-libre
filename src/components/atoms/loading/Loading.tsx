import { useEffect, useState } from "react";
import "./Loading.scss";
import { useEventEmitter } from "hooks/useEventEmitter";

const Loading = () => {
  const [loading, setLoading] = useState(false);
  const { events } = useEventEmitter();

  useEffect(() => {
    setLoading(events.loading);
  }, [events.loading]);

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
