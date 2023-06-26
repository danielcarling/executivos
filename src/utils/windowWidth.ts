import { useEffect, useState } from "react";


// export const useWindowDimensions = () => {

//    const [width, setWidth] = useState(100)

//    const updateDimensions = () => {
//       setWidth(window.innerWidth);
//    }
//    useEffect(() => {
//       setWidth(window.innerWidth)
//       window.addEventListener("resize", updateDimensions);
//       return () => window.removeEventListener("resize", updateDimensions);
//    }, []);
//    return width >= 1120 ? 'no' : 'yes'
// }

export const useWindowDimensions = () => {

   const [width, setWidth] = useState(100)

   const updateDimensions = () => {
      setWidth(window.innerWidth);
   }
   useEffect(() => {
      setWidth(window.innerWidth)
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
   }, []);
   if (width >= 1120) {
      return 'bp1';
   } else if (width >= 880 && width < 1120) {
      return 'bp2';
   } else {
      return 'bp3';
   }
}