import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={467}
    viewBox="0 0 280 467"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="130" r="130" />
    <rect x="0" y="274" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="311" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="427" rx="10" ry="10" width="91" height="27" />
    <rect x="127" y="415" rx="20" ry="20" width="152" height="46" />
  </ContentLoader>
);

export default Skeleton;
