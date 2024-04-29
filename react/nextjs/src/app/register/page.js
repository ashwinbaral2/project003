import React from "react";
import { Button, Input } from "@nextui-org/react";

const register = () => {
  return (
    <div className="container">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="name" label="Name" placeholder="Enter your name" />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="address"
          label="Address"
          placeholder="Enter your Address"
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="password"
          label="Password"
          placeholder="Enter your Password"
        />
      </div>
      <br />
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Submit
      </Button>
    </div>
  );
};

export default register;
