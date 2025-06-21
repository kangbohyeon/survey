type DescProps = {
  children: React.ReactNode;
};
function Desc({ children }: DescProps) {
  return <h4>{children}</h4>;
}

export default Desc;
