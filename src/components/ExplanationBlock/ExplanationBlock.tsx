import { ExplanationBlockStyled } from "./ExplanationBlock.styled";

export const ExplanationBlock = ({
  explanation,
}: {
  explanation: string | null | undefined;
}) => {
  return (
    <ExplanationBlockStyled
      dangerouslySetInnerHTML={{
        __html: explanation || "",
      }}
    />
  );
};
