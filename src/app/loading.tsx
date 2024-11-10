"use client";

import { Loader } from "lucide-react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <Loader className="size-10 animate-spin text-muted-foreground" />
    </div>
  );
};

export default LoadingPage;
