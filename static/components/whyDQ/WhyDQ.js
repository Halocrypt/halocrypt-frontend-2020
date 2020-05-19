import { centerTextCSS } from "../../fallbackComponents";
import F from "../../images/f.png";
export default function DQ() {
  return (
    <div
      style={{
        ...centerTextCSS,
        fontSize: "2rem",
        flexDirection: "column",
        marginLeft: "1.5rem",
      }}
    >
      <div>
        You could be disqualified for any reason... Suspected cheating, botting
        or team play (This is not a team competition).
      </div>
      <div>
        A Disqualification is not permanent. You can contact the mods and we
        will try to resolve the issue
      </div>
      <div>
        However if we find repeated instances of unacceptable behaviour, we will
        delete your account. Which is pretty permanent.
      </div>

      <div>
        <img src={F} class="you-gon" />
      </div>
    </div>
  );
}
