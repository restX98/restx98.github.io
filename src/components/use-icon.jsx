"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const iconMap = {
  email: MdEmail,
  github: FaGithub,
  linkedin: FaLinkedin,
};

export function useIcon(iconName) {
  const IconComponent = iconMap[iconName.toLowerCase()];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
}
