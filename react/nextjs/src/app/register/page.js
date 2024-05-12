import React from "react";
import { Button, Input } from "@nextui-org/react";
import CustomNavbar from "@/components/navbar/page";

const register = () => {
  return (
    
    <div>
      <CustomNavbar company="MAXWELL" />
      <div className="container login shadow-2xl">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pb-4">
          <Input type="name" label="Name" placeholder="Enter your name" />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pb-4">
          <Input
            type="address"
            label="Address"
            placeholder="Enter your Address"
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pb-4">
          <Input type="email" label="Email" placeholder="Enter your email" />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pb-4">
          <Input
            type="password"
            label="Password"
            placeholder="Enter your Password"
          />
        </div>
        <br />
        <Button radius="sm" color={"primary"}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default register;
