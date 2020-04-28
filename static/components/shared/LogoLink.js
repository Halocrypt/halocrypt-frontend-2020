import logoImg from "../../images/logo.svg";
import { A } from "@hydrophobefireman/ui-lib";
export default function LogoLink(props) {
  const size = getSize(props.size);
  return (
    <A
      href={"/"}
      class={["hoverable"].concat(props.class || [])}
      aria-label="home page"
      style={{
        backgroundImage: `url("${logoImg}")`,
        height: size,
        width: size,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        margin: "auto",
      }}
    ></A>
  );
}

const getSize = (x) => {
  if (/\d$/.test(x)) return `${x}px`;
  return x;
};
