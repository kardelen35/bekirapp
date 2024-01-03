import Link from "next/link";
import React from "react";

interface MenuProps {
  menu: any;
}

const MenuItem = ({ menu }: MenuProps) => {
  return <Link href={menu.url}>{menu.name}</Link>;
};

export default MenuItem;
