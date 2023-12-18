/** @format */

import { useParams } from "react-router-dom";
export const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-center bg-white text-teal-800-500 text-3xl p-4">
      User : {userid}
    </div>
  );
};
