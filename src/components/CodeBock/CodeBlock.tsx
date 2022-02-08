import { CodeBlockStyled } from "components/CodeBock/CodeBlock.styled";

export const CodeBlock = ({ code }: { code: string | null | undefined }) => (
  <CodeBlockStyled
    dangerouslySetInnerHTML={{
      __html: code || "",
    }}
  />
);
