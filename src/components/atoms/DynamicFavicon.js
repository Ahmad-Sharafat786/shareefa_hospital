// DynamicFavicon.jsx

import React, { useEffect } from "react";

const DynamicFavicon = ({ color }) => {
  useEffect(() => {
    const updateFavicon = (color) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const width = 64;
      const height = 64;

      canvas.width = width;
      canvas.height = height;

      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 21 25"><path d="M17.115 22.0304C15.5764 23.3151 13.7123 24.1264 11.7399 24.3699C9.76753 24.6134 7.76804 24.279 5.97444 23.4057C4.18083 22.5323 2.66697 21.1561 1.60922 19.4372C0.551481 17.7184 -0.00658111 15.7277 5.85418e-05 13.6971L5.26311 13.7151C5.2598 14.7262 5.53768 15.7174 6.06437 16.5733C6.59107 17.4292 7.34488 18.1145 8.23799 18.5494C9.13109 18.9842 10.1267 19.1507 11.1089 19.0295C12.091 18.9082 13.0192 18.5043 13.7853 17.8646L17.115 22.0304Z" fill="${color}"/><path d="M3.8508 2.86398C5.38939 1.57933 7.25349 0.768006 9.22589 0.524527C11.1983 0.281049 13.1978 0.615445 14.9914 1.48876C16.785 2.36206 18.2989 3.73833 19.3566 5.45719C20.4143 7.17605 20.9724 9.16673 20.9658 11.1973L15.7027 11.1793C15.706 10.1682 15.4281 9.17698 14.9014 8.32109C14.3748 7.4652 13.6209 6.7799 12.7278 6.34505C11.8347 5.91019 10.8391 5.74368 9.85697 5.86492C8.87483 5.98616 7.94663 6.39015 7.1805 7.02983L3.8508 2.86398Z" fill="${color}"/><path d="M0 10.7334H20.4104C20.7172 10.7334 20.9659 10.9821 20.9659 11.2889V14.162H0.555503C0.248707 14.162 0 13.9133 0 13.6065V10.7334Z" fill="${color}"/></svg>`;

      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);

        const newFavicon = canvas.toDataURL("image/png");
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
          favicon.href = newFavicon;
        } else {
          const link = document.createElement("link");
          link.rel = "icon";
          link.href = newFavicon;
          document.head.appendChild(link);
        }
      };

      img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
    };

    updateFavicon(color);
  }, [color]);

  return null;
};

export default DynamicFavicon;
