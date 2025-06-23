import styles from '../assets/css/SurveyPage.module.css';
import { PRIMARY, SECONDARY, TERTIARY } from '../constants/color';

type ButtonType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type ButtonProps = {
  type: ButtonType;
  children: React.ReactNode;
  onChange: () => void;
};

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
} as const;

function Button({ type, children, onChange }: ButtonProps) {
  const theme = colorMap[type];

  const defaultBorder =
    type === 'TERTIARY' ? colorMap.TERTIARY.BUTTON.DEFAULT.BORDER : 'none';
  const hoverBorder =
    type === 'TERTIARY' ? colorMap.TERTIARY.BUTTON.HOVER.BORDER : 'none';
  const activeBorder =
    type === 'TERTIARY' ? colorMap.TERTIARY.BUTTON.PRESSED.BORDER : 'none';
  const disabledBorder =
    type === 'TERTIARY' ? colorMap.TERTIARY.BUTTON.DISABLED.BORDER : 'none';

  return (
    <button
      className={styles.button}
      style={
        {
          '--color': theme.BUTTON.DEFAULT.COLOR,
          '--background': theme.BUTTON.DEFAULT.BACKGROUND,
          '--border': defaultBorder,
          '--hover_color': theme.BUTTON.HOVER.COLOR,
          '--hover_background': theme.BUTTON.HOVER.BACKGROUND,
          '--hover_border': hoverBorder,
          '--active_color': theme.BUTTON.PRESSED.COLOR,
          '--active_background': theme.BUTTON.PRESSED.BACKGROUND,
          '--active_border': activeBorder,
          '--disabled_color': theme.BUTTON.DISABLED.COLOR,
          '--disabled_background': theme.BUTTON.DISABLED.BACKGROUND,
          '--disabled_border': disabledBorder,
        } as React.CSSProperties
      }
      onClick={onChange}
    >
      {children}
    </button>
  );
}

export default Button;
