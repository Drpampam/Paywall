import { TbArrowsRightLeft, TbShieldCheck } from "react-icons/tb";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { RiFolderLockLine } from "react-icons/ri";
import {
  AiOutlineGoogle,
  AiOutlineTransaction,
  AiOutlineTwitter,
} from "react-icons/ai";
import fcmb from "app/assets/img/fcmb-logo.png";
import gtb from "app/assets/img/gtb-png.png";
import first from "app/assets/img/firstbank-logo.png";

export const featureItems = [
  {
    id: 1,
    icon: <RiFolderLockLine />,
    feature: "Keeping secrecy",
  },
  {
    id: 2,
    icon: <AiOutlineTransaction />,
    feature: "Convenient transaction",
  },
  {
    id: 3,
    icon: <TbArrowsRightLeft />,
    feature: "Free transaction",
  },
  {
    id: 4,
    icon: <TbShieldCheck />,
    feature: "Security guaranted",
  },
];

export const reviewItems = [
  {
    id: 1,
    fullName: "Adekola Johnson",
    comment:
      "Great Application! Nice Interface, Easy to navigate with excellent wallet features. I really enjoyed using this app.",
  },
  {
    id: 2,
    fullName: "Chinedu Otuka",
    comment:
      "I loved how i have multiple options of transferring money -to user wallets or to the bank account directly.So flexible!",
  },
  {
    id: 3,
    fullName: "Onyinyechi Onyenaucheya",
    comment:
      "No hassle while registering on the app, Commendable. From the past experiences with a friend's phone I love their transaction proceedings.",
  },
  {
    id: 4,
    fullName: "Chinonso Ikewelugo",
    comment:
      "When I tell you it's good, it's superb! This is just the best payment platform for businesses in Nigeria. It's far better than others i have used.",
  },
  {
    id: 5,
    fullName: "Best Osadolor",
    comment:
      " Pretty good experience with great attention to detail.I love it. Don't ever change the app/ services unless needed. Don't fix it if it ain't broken. Cheers🎉",
  },
  {
    id: 6,
    fullName: "Nnadozie Opara",
    comment:
      "Paywall Africa is indeed simplifying payments for endless possibilities with their range of products. I love this app, it enables me view my dashboard at a glance",
  },
];

export const instructItems = [
  {
    id: "ONE",
    title: "Sign in or Sign up your account",
    comment:
      "You can sign up via your email or google account to get started with Paywall Africa.",
  },
  {
    id: "TWO",
    title: "Click transfer on your dashboard",
    comment:
      "Unlimited, seamless wallet-to-wallet transactions for multiple users across all communities.",
  },
  {
    id: "THREE",
    title: "Select your desired bank and send",
    comment:
      "Make flexible transfer and payments across all commercial and virtual banks in Nigeria.",
  },
];

export const headerItems = [
  {
    id: "1",
    headingText: "How it works",
    subText:
      "Your Paywall journey starts here. Join the millions of people who trust Paywall to send,spend, and manage their money quickly and securely.",
  },
];

export const headerItems2 = [
  {
    id: "1",
    headingText: "Hear from our customers",
    subText:
      "Learn how real users rate this software's ease-of-use,functionality, overall quality and customer support.",
  },
];

export const navContent = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Features",
    url: "/#features",
  },
  {
    id: 3,
    name: "About",
    url: "/#about",
  },
  {
    id: 4,
    name: "Contact Us",
    url: "/#contact-us",
  },
];

export const FooterIcons = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <AiOutlineTwitter />,
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
  },
  {
    id: 4,
    icon: <AiOutlineGoogle />,
  },
];

export const FooterContent = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About Us",
  },
  {
    id: 3,
    name: "Features",
  },
  {
    id: 4,
    name: "Contact Us",
  },
];

export const FooterTerms = [
  {
    id: 1,
    name: "Privacy Policy",
  },
  {
    id: 2,
    name: "Terms of Conditions",
  },
  {
    id: 3,
    name: "Legal",
  },
  {
    id: 4,
    name: "Help",
  },
];

//transaction type 0 for credit, 1 for debit
export const transactionDetails = [
  {
    bankLogo: gtb,
    accountName: "Victor Abimbola",
    bank: "Gtb",
    time: "2:00 PM",
    amount: "N2,000",
    transactionType: 0,
  },
  {
    bankLogo: first,
    accountName: "Femi Jude",
    bank: "FirstBank",
    time: "4:00 PM",
    amount: "N1,000",
    transactionType: 1,
  },
  {
    bankLogo: gtb,
    accountName: "Ola David",
    bank: "Gtb",
    time: "6:00 PM",
    amount: "N7,000",
    transactionType: 1,
  },
  {
    bankLogo: fcmb,
    accountName: "Vincent Opara",
    bank: "FCMB",
    time: "9:35 PM",
    amount: "N5,000",
    transactionType: 0,
  },
];

export const bankList = [
  {
    house: "",
    label: "Select bank",
    disabled: true
  },
  {
    house: "firstBank",
    label: "First Bank",
  },
  {
    house: "accessBank",
    label: "Access Bank",
  },
];

