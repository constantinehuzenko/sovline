import { CodeBlock as CodeBlockLibrary, dracula } from "react-code-blocks";
import styled from "styled-components";

const CodeBlockStyled = styled.div`
  margin: 16px 0;
  font-family: "Fira Code", monospace;
  border-radius: 16px;
  overflow: hidden;
  > span {
    background-color: #192434 !important;
  }
`;

// export const CodeBlock = ({ code }: { code: string | null | undefined }) =>
//   code ? (
//     <CodeBlockStyled>
//       <CodeBlockLibrary
//         style={{
//           fontFamily: "Fira Code ,monospace",
//         }}
//         language="javascript"
//         text={code}
//         showLineNumbers={false}
//         theme={dracula}
//         wrapLines
//         codeBlock
//       />
//     </CodeBlockStyled>
//   ) : (
//     <div />
//   );

const CodeBlock = () => ({
  some: "any",
});
