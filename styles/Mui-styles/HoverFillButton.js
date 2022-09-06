import * as React from "react";
import ButtonUnstyled, {
  ButtonUnstyledProps,
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled, Theme } from "@mui/system";

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  return (
    <svg width="200" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 200,0 200,50" className="bg" />
      <polygon points="0,50 0,0 200,0 200,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="200" height="50">
        <div className="content hover:text-black">{children}</div>
      </foreignObject>
    </svg>
  );
});

const blue = {
  50: "#ccfbf1",
  100: "#ccfbf1",
  200: "#2dd4bf",
  400: "#14b8a6",
  500: "#0d9488",
  600: "#0f766e",
  800: "#115e59",
  900: "#115e59",
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === "light" ? blue[600] : blue[100]};
  --hover-color: ${theme.palette.mode === "light" ? blue[200] : blue[900]};
  --active-color: ${theme.palette.mode === "light" ? blue[100] : blue[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 3;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === "dark" ? blue[400] : blue[200]};
    outline-offset: 2px;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      line-height: 1.5;
      font-weight: 900;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #077E71;
      text-transform: uppercase;
    }
    & .content:hover{
        color: #077E71
    }

    & svg {
      margin: 0 5px;
    }
  }`
);

export const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});
