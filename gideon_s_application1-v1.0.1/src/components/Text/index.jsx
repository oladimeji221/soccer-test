import React from "react";

const sizeClasses = {
  txtNunitoRegular10Gray600: "font-normal font-nunito",
  txtDMSansBold48: "font-bold font-dmsans",
  txtNunitoBold15: "font-bold font-nunito",
  txtManropeRegular16WhiteA700: "font-manrope font-normal",
  txtDMSansRegular20: "font-dmsans font-normal",
  txtNunitoRegular24: "font-normal font-nunito",
  txtMontserratRomanExtraBold35Indigo700: "font-extrabold font-montserrat",
  txtNunitoRegular16WhiteA700: "font-normal font-nunito",
  txtNunitoRegular10WhiteA70087: "font-normal font-nunito",
  txtManropeBold15: "font-bold font-manrope",
  txtNunitoRegular20: "font-normal font-nunito",
  txtManropeRegular16: "font-manrope font-normal",
  txtMontserratRomanExtraBold40: "font-extrabold font-montserrat",
  txtManropeRegular18: "font-manrope font-normal",
  txtDMSansRegular14739: "font-dmsans font-normal",
  txtNunitoSemiBold16Indigo20001: "font-nunito font-semibold",
  txtDMSansBold64: "font-bold font-dmsans",
  txtDMSansBold20: "font-bold font-dmsans",
  txtDMSansRegular13WhiteA700: "font-dmsans font-normal",
  txtRobotoBold20: "font-bold font-roboto",
  txtManropeBold18: "font-bold font-manrope",
  txtDMSansRegular70: "font-dmsans font-normal",
  txtNunitoSemiBold16: "font-nunito font-semibold",
  txtNunitoRegular24Black900d1: "font-normal font-nunito",
  txtDMSansBold16: "font-bold font-dmsans",
  txtDMSansMedium2964: "font-dmsans font-medium",
  txtDMSansBold32: "font-bold font-dmsans",
  txtDMSansRegular10: "font-dmsans font-normal",
  txtNunitoRegular16: "font-normal font-nunito",
  txtNunitoRegular20Bluegray200: "font-normal font-nunito",
  txtMontserratRomanExtraBold40PinkA20001: "font-extrabold font-montserrat",
  txtRobotoRegular12: "font-normal font-roboto",
  txtMontserratRomanExtraBold35: "font-extrabold font-montserrat",
  txtManropeMedium14: "font-manrope font-medium",
  txtNunitoRegular10: "font-normal font-nunito",
  txtDMSansRegular16Gray90002: "font-dmsans font-normal",
  txtManropeMedium18: "font-manrope font-medium",
  txtDMSansRegular14: "font-dmsans font-normal",
  txtDMSansRegular13: "font-dmsans font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtDMSansRegular16: "font-dmsans font-normal",
  txtDMSansRegular15: "font-dmsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
