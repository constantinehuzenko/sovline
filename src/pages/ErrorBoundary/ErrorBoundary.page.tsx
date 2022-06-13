/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Wrapper } from "components/Wrapper/Wrapper";
import { ControlButtonStyled } from "components/ControlButton/ControlButton.styled";
import { StyledImage } from "./ErrorBoundary.styled";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state?.hasError) {
      return (
        <Wrapper>
          <StyledImage src="https://media0.giphy.com/media/l1J9u3TZfpmeDLkD6/giphy.gif?cid=790b76113ccb60f00ef98aa5aba9e9045c1327022888f8bd&rid=giphy.gif&ct=g" />

          <h1>ERROR HAPPENED 🤬</h1>
          <br />
          <p>
            Your face when something wrong with app you use. Now is same thing
            happened...🤦‍♂️
          </p>

          <br />

          <ControlButtonStyled>
            <button type="button">😌 CREATE ISSUE ON GITHUB</button>
          </ControlButtonStyled>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}
