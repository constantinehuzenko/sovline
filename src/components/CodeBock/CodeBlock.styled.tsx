import styled from "styled-components";

export const CodeBlockStyled = styled.div`
  pre {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #192434;
    margin-top: 16px;
    padding: 16px;
    border-radius: 16px;
    code {
      color: #ffffff;
    }
    .hljs-function {
      color: #66d9ef;
    }
    .hljs-keyword {
      color: #f92672;
    }
    .hljs-title {
      color: #2600ff;
    }
    .hljs-params {
      color: #66d9ef;
    }
    .hljs-built_in {
      color: #ffbd37;
    }
    .hljs-string {
      color: #ffbd37;
    }
    .hljs-number {
      color: #a681ff;
    }
  }
`;
