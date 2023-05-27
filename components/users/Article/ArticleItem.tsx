import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

import { apiUserGetCreaterData } from "@/components/api";
export default function ArticleItem({ username, id, title, subtitle, updateAt }: any) {
  const [createrpicture, setcreaterpicture] = useState("");
  useEffect(() => {
    const GetCreaterData = async () => {
      const createrdata = await apiUserGetCreaterData(username);
      if (createrdata.data.userData) setcreaterpicture(createrdata.data.userData.picture);
    };
    GetCreaterData();
  }, [setcreaterpicture, username]);

  return (
    <li className="group/item border-blue-200 my-4 rounded-lg border-4 first:mt-0">
      <a className="text no-underline" href={`/${username}/${id}`}>
        <div className="hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 grid h-auto w-full grid-cols-12 gap-x-16 rounded-lg p-2">
          <div className="col-span-8">
            <p className="line-clamp-1 text-slate-900 dark:text-white mb-2 text-2xl font-bold tracking-tight">
              {title}
            </p>
            <div className="mb-2 flex flex-row items-center">
              <Avatar src={createrpicture} alt="not find Avatar" />
              <div className="ml-2 flex items-center">
                <p className="text-base"> {username}</p>
              </div>
            </div>
            <p className="line-clamp-2 text-slate-500 dark:text-slate-400 mb-2 text-base">{subtitle}</p>
          </div>
          {/* FIXME:灰底要改為圖片 */}
          <div className="bg-gray-400 col-span-4 rounded-lg">
            <img className="h-full w-full rounded-lg" src="" alt="Null"></img>
          </div>
          {/* FIXME:Icon後的數字 */}
          <div className="col-span-12  flex items-center justify-between">
            <div className="flex items-center">
              <p className="ml-2">{updateAt.substring(0, 10)}</p>
              {/* TODO:喜歡 */}
              <div className="ml-6">{/* <FavoriteBorderOutlinedIcon className="text-black" /> */}</div>
              <span className="ml-2">100</span>
              {/* TODO:打賞 */}
              <div className="ml-6">{/* <StarsOutlinedIcon className="text-black" /> */}</div>
              <span className="ml-2">10</span>
            </div>
            <div className="flex items-center justify-end">
              {/* TODO:收藏 */}
              <IconButton className="mr-4">{/* <BookmarkAddOutlinedIcon className="text-black" /> */}</IconButton>
              <IconButton className="mr-4">{/* <ArrowForwardOutlinedIcon className="text-black" /> */}</IconButton>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
