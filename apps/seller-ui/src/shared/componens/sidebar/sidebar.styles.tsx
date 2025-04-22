"use client";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: var(--background);
  transition: transform 0.2s ease;
  height: 100%;
  position: fixed;
  transaform: translateX(-100%);
  width: 16rem;
  flex-shrink: 0;
  z-index: 202;
  overflow-y: auto;
  border-right: 1px solid var(--border);
  flex-direction: column;
  padding-top: var(--space-10);
  padding-bottom: var(11space-10);
  padding-left: var(--space-6);
  padding-right: var(--space-6);

  ::-weblitk-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: var(--space-8);
  align-items: center;
  padding-left: var(--space-10);
  padding-right: var(--space-10);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
  margin-top: var(--space-13);
  padding-left: var(--space-4);
  padding-right: var(--space-4);
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-12);
  margin-top: var(--space-18);
  margin-bottom: var(--space-8);
  padding-left: var(--space-8);
  padding-right: var(--space-8);

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 23, 42, 0.3);
  z-index: 201;
  transition: opacity 0.3s ease;
  opacity: 0.8;
  @media (min-width: 768px) {
    display: none;
    z-index: auto;
    opacity: 1;
  }
`;

export const Sidebar = {
  Wrapper: SidebarWrapper,
  Header,
  Body,
  Overlay,
  Footer,
};
