import logoImg from "../../images/logo.svg";
import { A } from "@hydrophobefireman/ui-lib";
export default function LogoLink(props) {
  return (
    <A
      href="/"
      class={["hoverable"].concat(props.class || [])}
      style={{
        backgroundImage: `url("${logoImg}")`,
        height: `${props.size}px`,
        width: `${props.size}px`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></A>
  );
}
