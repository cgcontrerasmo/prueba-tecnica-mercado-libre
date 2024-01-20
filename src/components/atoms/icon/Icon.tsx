import { IconComponents, iconProps } from "types/icon/icon";
import "./Icon.scss";

const Icon = ({ name, size = 16, ...rest }: iconProps) => {
  const MyIcon = IconComponents[name];
  const styles = {
    height: `${size}px`,
    width: `${size}px`,
  };

  return (
    <div className="icon">
      <img src={MyIcon} alt={`Icono-${name}`} {...rest} style={styles} />
    </div>
  );
};

export default Icon;
