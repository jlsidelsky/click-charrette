import styles from "./styles/Box.module.css";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  span?: number; // Number of columns to span
  style?: React.CSSProperties; // Inline styles for additional customization
  className?: string; // Additional class names

  height?: number;
}

const Box: React.FC<BoxProps> = ({
  children,
  span = 1,
  style,
  height = 1,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`${styles.box} ${className || ""}`}
      style={{
        height: `${238 * height + (height - 1) * 16}px`,
        gridColumn: `span ${span}`, // Define column span
        ...style, // Merge inline styles
      }}
    >
      {children}
    </div>
  );
};

export default Box;
