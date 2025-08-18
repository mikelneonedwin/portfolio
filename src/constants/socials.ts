import { Facebook, Github, Mail, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";
import {
  EMAIL_URL,
  FACEBOOK_URL,
  GITHUB_URL,
  PHONE_URL,
  TELEGRAM_URL,
  X_URL,
} from "./globals";

export const socials = [
  {
    icon: Github,
    href: GITHUB_URL,
    name: "GitHub",
  },
  {
    icon: Facebook,
    href: FACEBOOK_URL,
    name: "Facebook",
  },
  {
    icon: FaXTwitter,
    href: X_URL,
    name: "X (formerly Twitter)",
  },
  {
    icon: Mail,
    href: EMAIL_URL,
    name: "Email",
  },
  {
    icon: Phone,
    href: PHONE_URL,
    name: "Phone",
  },
  {
    icon: RiTelegram2Line,
    href: TELEGRAM_URL,
  },
];
