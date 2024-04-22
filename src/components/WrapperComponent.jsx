import React, { useState } from "react";

import ImageWithTwoRows from "./ImageWithTwoRows";

const WrapperComponent = ({ data }) => {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const handleImageClick = (index) => {
    setOpenPopupIndex(index === openPopupIndex ? null : index);
  };

  return (
    <>
      <div className="sdgGrid-container">
        {data.map((item, index) => (
          <ImageWithTwoRows
            key={index} // Use a unique key for each item
            src1={item.src1}
            src2={item.src2}
            rowTitle={item.rowTitle}
            row1={item.row1}
            onClick={() => handleImageClick(index)}
            isOpen={openPopupIndex === index}
          />
        ))}
      </div>
    </>
  );
};

export default WrapperComponent;
