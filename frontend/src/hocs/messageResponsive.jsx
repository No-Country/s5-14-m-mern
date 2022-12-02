import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export default function messagesResponsive(Page) {
  return function Wrapper(pageProps) {
    const navigate = useNavigate();
    const isTablet = useMediaQuery({
      query: "(min-width: 778px)"
    });
    console.log(isTablet);
    useEffect(() => {
      if (!isTablet) {
        navigate("/messages");
      }
    }, []);

    return <Page {...pageProps} />;
  };
}
