import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiArticleGetUserAllArticle, apiUserGetCreaterData } from "@/components/api";
import { update } from "@/store/CreaterSlice";

import AllFlowerTypes from "../components/dashboard/AllFlowerTypes";
import UserRecord from "../components/dashboard/UserRecord";

export default function Page(props: any) {
  const [IsManager, SetIsManager] = useState(false);
  const dispatch = useDispatch();
  const User = useSelector((state: any) => state.User);
  useEffect(() => {
    //TODO: 是否為管理者，不是就轉跳404

    console.log("props.createrData.namecreaterDatacreaterData12313", props.createrData);
    console.log("props.createrData.namecreaterDatacreaterData", props.createrData.admin);
    if (props.createrData.admin) SetIsManager(true);
    dispatch(update(JSON.stringify(props.createrData)));
  }, [User.profile.name, dispatch, props.IsCreater, props.createrData]);

  return (
    <>
      {IsManager ? (
        <div className="page-container">
          <Head>
            <title>Page - Flower</title>
            <meta property="og:title" content="Page - Flower" />
          </Head>
          <div className="page-container4">
            <div className="page-container5">
              <button className="page-button1 button">使用者記錄</button>
              <button className="page-button2 button">花總類</button>
            </div>
            <div className="page-container6">
              <AllFlowerTypes rootClassName="component4-root-class-name"></AllFlowerTypes>
              <UserRecord rootClassName="component5-root-class-name"></UserRecord>
            </div>
          </div>
        </div>
      ) : (
        //FIXME: 換成使用者跑錯地方
        <p className="text-9xl">請你 go away</p>
      )}
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const url = context.req.url.substring(1);
  let createrData = { id: 0, name: "", address: "", email: "", picture: "", backgroundPhoto: "", admin: false };

  // 獲取特定使用者資料
  await apiUserGetCreaterData(url)
    .then(res => {
      createrData = res.data.userdata;
      console.log("createrData", createrData);
    })
    .catch(() => {
      // 找不到使用者
      return {
        notFound: true,
      };
    });
  try {
    const Articles = await apiArticleGetUserAllArticle(createrData.address);
    return { props: { createrData, Articles: Articles.data } };
  } catch {
    return { props: { createrData, Articles: [] } };
  }
};
