// const screenshot = (() => {
//   /**
//    * @param {HTMLElement} source
//    * @param {HTMLElement} target
//    */
//   function cloneStyle(source, target) {
//     const computed = getComputedStyle(source);
//     const css = [];

//     for (const style of computed) {
//       const value = computed.getPropertyValue(style);
//       if (!value) continue;
//       css.push(`${style}:${value};`);
//     }

//     target.style = css.join();
//   }

//   /**
//    *
//    * @param {HTMLElement} node
//    */
//   return function screenshot(sourceNode) {
//     /**@type {HTMLElement} */
//     const clonedNode = sourceNode.cloneNode(true);
//     const clonedChildren = clonedNode.querySelectorAll("*");
//     const nodeChildren = sourceNode.querySelectorAll("*");

//     for (let i = 0; i < clonedChildren.length; i++) {
//       const sourceChild = nodeChildren[i];
//       const cloneChild = clonedChildren[i];
//       cloneStyle(sourceChild, cloneChild);
//     }
//     for (let i = 0; i < clonedChildren.length; i++) {
//       const child = clonedChildren[i];
//       if (
//         child.tagName === "SCRIPT" ||
//         child.style.display === "none" ||
//         child.tagName === "HEAD"
//       ) {
//         child.remove();
//       }
//     }
//     cloneStyle(sourceNode, clonedNode);
//     [
//       "margin",
//       "marginLeft",
//       "marginTop",
//       "marginBottom",
//       "marginRight",
//     ].forEach((prop) => (sourceNode.style[prop] = ""));
//     clonedNode.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
//     const xml = new XMLSerializer().serializeToString(clonedNode);
//     const width = sourceNode.offsetWidth;
//     const height = sourceNode.offsetHeight;
//     const svg = `<?xml version='1.0' encoding='UTF-8' ?><svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="${width}"
//     height="${height}"
//   >
//     <foreignObject width="100%" height="100%" x="0" y="0">${xml}</foreignObject>
//   </svg>
//   `;
//     const img = new Image();
//     img.src = `data:image/svg+xml;base64,${btoa(svg)}`;
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     canvas.height = height;
//     canvas.width = window;
//     ctx.drawImage(img, 0, 0);
//     return {
//       svg,
//       imageAsDATAURI: (quality) =>
//         canvas.toDataURL("image/jpeg", quality || 100),
//       img,
//       canvas,
//     };
//   };
// })();
