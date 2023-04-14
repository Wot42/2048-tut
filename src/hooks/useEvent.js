import { useEffect } from "react";

export default function useEvent(event, handeler, passive = false) {
  useEffect(() => {
    window.addEventListener(event, handeler, passive);

    return function cleanUp() {
      window.removeEventListener(event, handeler, passive);
    };
  });
}
