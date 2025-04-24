"use client";
import { useAtom } from "jotai";
import { activeSidebarItem } from "../configs/constants";

export const useSidebar = () => {
  const [activeSidebar, setActiveSidebar] = useAtom(activeSidebarItem);

  return { activeSidebar, setActiveSidebar };
};
