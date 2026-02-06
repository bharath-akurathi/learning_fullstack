"use client"
// import { Link } from "react-router-dom"; // dont use this
import Link from "next/link";
import Script from "next/script";
export default function Home() {
  return (
    <div>
      <h1>this the home page - lets learn about next routing</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About us</Link>
        </li>
        <li><Link href="/contact">Contact us</Link></li>
      </ul>
    </div>
  );
}
