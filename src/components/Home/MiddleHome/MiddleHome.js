import React from "react";

import icon1 from "../../../images/icon01_small.png";
import icon2 from "../../../images/icon02_small.png";
import icon3 from "../../../images/icon03_small.png";
import icon4 from "../../../images/icon04_small.png";

export default function MiddleHome() {
  return (
    <div className="grid grid-cols-4 gap2 pt-16 mx-32">
      {/* 1 */}
      <div className="grid grid-cols-3">
        <div className="pt-2">
          <img className="w-1/2" src={icon1} alt="" />
        </div>
        <div className="col-span-2">
          <h3 className="text-[20px] ">Quick Delivery</h3>
          <hr className="w-[50px] h-2" />
          <p className="text-[16px]">Most product are free shipping.</p>
        </div>
      </div>
      {/* 2 */}
      <div className="grid grid-cols-3">
        <div className="pt-2">
          <img className="w-1/2" src={icon2} alt="" />
        </div>
        <div className="col-span-2">
          <h3 className="text-[20px] ">Pay with Easy</h3>
          <hr className="w-[50px] h-2" />
          <p className="text-[16px]">Most product are free shipping.</p>
        </div>
      </div>
      {/* 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div className="pt-2">
          <img className="w-1/2" src={icon3} alt="" />
        </div>
        <div className="col-span-2">
          <h3 className="text-[20px] ">Best Deal</h3>
          <hr className="w-[50px] h-2" />
          <p className="text-[16px]">Most product are free shipping.</p>
        </div>
      </div>
      {/* 4 */}
      <div className="grid grid-cols-3">
        <div className="pt-2">
          <img className="w-1/2" src={icon4} alt="" />
        </div>
        <div className="col-span-2">
          <h3 className="text-[20px] ">Secured Payment</h3>
          <hr className="w-[50px] h-2" />
          <p className="text-[16px]">Most product are free shipping.</p>
        </div>
      </div>
    </div>
  );
}
