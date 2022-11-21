import React, { useEffect, useState } from "react";
import Link from "next/link";

import config from "services/config";
import * as tags from "services/tags";

import styles from "./Sidebar.module.css";

export default function SidebarMobile() {
  const [sidebarDisplay, setSidebarDisplay] = useState("none");

  function showMenuClick() {
    console.log("menu status: ", sidebarDisplay);
    if (sidebarDisplay === "none") {
      setSidebarDisplay("flex");
    } else {
      setSidebarDisplay("none");
    }
  }

  useEffect(() => {
    console.log("menu status: ", sidebarDisplay);
  }, [sidebarDisplay]);

  return (
    <>
      <div className="btn">
        <div className="btn-menu" id="btn-menu" onClick={() => showMenuClick()}>
          <i className="gg-menu-grid-o"></i>
        </div>
        <div className="btn-toggle-mode">
          <i className="gg-edit-contrast"></i>
        </div>
        <div className="btn-scroll-top">
          <i className="gg-push-chevron-up-r"></i>
        </div>
      </div>
      <aside className="sidebar-mobile" style={{ display: sidebarDisplay }}>
        {/* Navigation Links */}
        <div className="sidebar-item sidebar-pages">
          <h3>Halaman</h3>
          <ul>
            {config.navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Meta Links */}
        <div className="sidebar-item sidebar-links">
          <h3>Meta</h3>
          <ul>
            {config.metaLinks.map((link, i) => (
              <li key={`${link.path}{i}`}>
                <Link
                  href={link.path}
                  target={link.newPage ? "_blank" : "_self"}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* External Links */}
        <div className="sidebar-item sidebar-links">
          <h3>Tautan Eksternal</h3>
          <div className={styles.external_links_container}>
            {config.externalLinks.map((link, i) => (
              <div key={`${link.path}${i}`}>
                <Link href={link.path} target="_blank">
                  <i className={link.icon}></i>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Tags Links */}
        <div className="sidebar-item sidebar-tags">
          <h3>Tags</h3>
          <ul>
            {tags.getTagsForSidebar().map((link) => (
              <li key={link.tag}>
                <Link href={`/tags/${link.tag}`}>
                  {link.tag}
                  <sup>({link.count})</sup>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Table of Contents */}
        {/* {window.location.pathname === "/post/[slug]" && config.showToc && (
        <div className="sidebar-item sidebar-toc">
            <h3>Daftar Isi</h3>
            
        </div>)} */}
      </aside>
    </>
  );
}
