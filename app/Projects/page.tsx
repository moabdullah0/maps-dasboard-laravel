"use client";
import React from "react";

import Layout from "../../components/Dashboard/Layout/Layout";
import ListProjects from "./GetAds";

const Ads = () => {
  return (
    <Layout>
      <h1 className=" font-black text-blue-color  items-center text-center text-xl">
        اعدادات المشاريع
      </h1>

      <ListProjects />
    </Layout>
  );
};

export default Ads;
