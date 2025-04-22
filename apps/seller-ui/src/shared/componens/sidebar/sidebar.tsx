"use client";
import React, { useEffect } from "react";
import { useSidebar } from "../../../hooks/useSidebar";
import { usePathname } from "next/navigation";
import useSeller from "../../../hooks/useSeller";
import Box from "../box";
import { Sidebar } from "./sidebar.styles";
import Link from "next/link";
import Logo from "../../../assets/svgs/Logo";
import SidebarItem from "./sidebar.item";
import {
  BellPlus,
  BellRing,
  CalendarPlus,
  Wallet,
  Inbox,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  Package,
  Settings,
  SquarePlus,
  TicketPercent,
} from "lucide-react";
import SidebarMenu from "./sidebar.menu";

const SideBarWrapper = () => {
  const { activeSidebar, setActiveSidebar } = useSidebar();
  const { seller } = useSeller();

  const pathname = usePathname();

  useEffect(() => {
    setActiveSidebar(pathname);
  }, [pathname, setActiveSidebar]);

  const getIconColor = (route: string) =>
    activeSidebar === route ? "#0085fa" : "#969696";

  return (
    <Box
      css={{
        height: "100vh",
        zIndex: 202,
        position: "sticky",
        padding: "8px",
        top: 0,
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
      className="sidebar-wrapper"
    >
      <Sidebar.Header>
        <Box>
          <Link href={"/"} className="flex justify-center items-center gap-2">
            <Logo width={32} height={32} />
            <Box>
              <h3 className="text-xl font-medium text-[#ecedee]">
                {seller?.shop?.name}
              </h3>
              <h5 className="font-medium text-xs pl-2 text-[#ecedeecf] whitespace-nowrap overflow-hidden text-ellipsis">
                {seller?.shop?.address}
              </h5>
            </Box>
          </Link>
        </Box>
      </Sidebar.Header>
      <div className="block my-3 h-full">
        <Sidebar.Body className="body sidebar">
          <SidebarItem
            title={"Dashboard"}
            icon={
              <LayoutDashboard size={22} color={getIconColor("/dashboard")} />
            }
            href={"/dashboard"}
            isActive={activeSidebar === "/dashboard"}
          ></SidebarItem>
          <div className="mt-2 block">
            <SidebarMenu title={"Main Menu"}>
              <SidebarItem
                title={"Orders"}
                icon={
                  <ListOrdered
                    size={22}
                    color={getIconColor("/dashboard/orders")}
                  />
                }
                href={"/dashboard/orders"}
                isActive={activeSidebar === "/dashboard/orders"}
              />
              <SidebarItem
                title={"Payments"}
                icon={
                  <Wallet
                    size={22}
                    color={getIconColor("/dashboard/payments")}
                  />
                }
                href={"/dashboard/payments"}
                isActive={activeSidebar === "/dashboard/payments"}
              />
            </SidebarMenu>
          </div>
          <div className="mt-2 block">
            <SidebarMenu title={"Products"}>
              <SidebarItem
                title={"Create Product"}
                icon={
                  <SquarePlus
                    size={22}
                    color={getIconColor("/dashboard/create-product")}
                  />
                }
                href={"/dashboard/create-product"}
                isActive={activeSidebar === "/dashboard/create-product"}
              />
              <SidebarItem
                title={"All Product"}
                icon={
                  <Package
                    size={22}
                    color={getIconColor("/dashboard/all-product")}
                  />
                }
                href={"/dashboard/all-product"}
                isActive={activeSidebar === "/dashboard/all-product"}
              />
            </SidebarMenu>
          </div>
          <div className="mt-2 block">
            <SidebarMenu title={"Events"}>
              <SidebarItem
                title={"Create Event"}
                icon={
                  <CalendarPlus
                    size={22}
                    color={getIconColor("/dashboard/create-event")}
                  />
                }
                href={"/dashboard/create-event"}
                isActive={activeSidebar === "/dashboard/create-event"}
              />
              <SidebarItem
                title={"All Event"}
                icon={
                  <BellPlus
                    size={22}
                    color={getIconColor("/dashboard/all-events")}
                  />
                }
                href={"/dashboard/all-events"}
                isActive={activeSidebar === "/dashboard/all-events"}
              />
            </SidebarMenu>
          </div>
          <div className="mt-2 block">
            <SidebarMenu title={"Controllers"}>
              <SidebarItem
                title={"Inbox"}
                icon={
                  <Inbox size={22} color={getIconColor("/dashboard/inbox")} />
                }
                href={"/dashboard/inbox"}
                isActive={activeSidebar === "/dashboard/inbox"}
              />
              <SidebarItem
                title={"Settings"}
                icon={
                  <Settings
                    size={22}
                    color={getIconColor("/dashboard/settings")}
                  />
                }
                href={"/dashboard/settings"}
                isActive={activeSidebar === "/dashboard/settings"}
              />
              <SidebarItem
                title={"Notifications"}
                icon={
                  <BellRing
                    size={22}
                    color={getIconColor("/dashboard/notifications")}
                  />
                }
                href={"/dashboard/notifications"}
                isActive={activeSidebar === "/dashboard/notifications"}
              />
            </SidebarMenu>
          </div>

          <div className="mt-2 block">
            <SidebarMenu title={"Extras"}>
              <SidebarItem
                title={"Discount Codes"}
                icon={
                  <TicketPercent
                    size={22}
                    color={getIconColor("/dashboard/discount-codes")}
                  />
                }
                href={"/dashboard/discount-codes"}
                isActive={activeSidebar === "/dashboard/discount-codes"}
              />
              <SidebarItem
                title={"Logout"}
                icon={<LogOut size={22} color={getIconColor("/logout")} />}
                href={"/logout"}
                isActive={activeSidebar === "/logout"}
              />
            </SidebarMenu>
          </div>
        </Sidebar.Body>{" "}
      </div>
    </Box>
  );
};

export default SideBarWrapper;
