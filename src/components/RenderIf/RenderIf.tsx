interface Props {
  isTrue: boolean;
  children: React.ReactNode;
}

const RenderIf = ({ isTrue, children }: Props) => <>{isTrue ? children : null}</>;

export default RenderIf;
