import React from "react";
import { Button, Input } from "@nextui-org/react";
import CustomNavbar from "@/components/navbar/page";
import Link from "next/link";


const login = () => {
  return (
    <div>
      <CustomNavbar company="MAXWELL" />
      <div className="container login shadow-2xl ">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pb-5 ">
          <Input type="username" placeholder="Username" />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pb-10">
          <Input type="password" placeholder="Password" />
        </div>
        <Button radius="sm" color="primary">
          Login
        </Button>
        <Link className="text-xs pt-5 " href="#">
          forgot password?
        </Link>
        <p className="text-xs pt-3 ">
          Don't have an account yet?&nbsp;
          <Link className="text-xs" href="/register">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default login;
