import React from "react";
import { ImFacebook, ImTwitter, ImGoogle } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./_child/Newsletter";

function Footer() {
  return (
    <footer className="bg-gray-50">
      <Newsletter/>
      <div className="container mx-auto flex justify-center py-10">
        <div className="py-4">
          <div className="flex gap-6 justify-center">
          <Link href={"/"}>
              <a>
                <ImFacebook color="#88888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImGoogle color="#88888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter color="#88888888" />
              </a>
            </Link>
          </div>

          <p className="py-4 text-gray-400">Copyright 2022 All rights reserved</p>
          <p className="text-gray-400 text-center">Terms and Condition</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
