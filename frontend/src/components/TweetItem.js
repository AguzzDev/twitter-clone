import { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TrashIcon } from "@heroicons/react/outline";

import FavoriteIcon from "../assets/svg/FavoriteIcon";
import MessageIcon from "../assets/svg/MessageIcon";
import RetweetIcon from "../assets/svg/RetweetIcon";
import { deletePost, deleteComment, likePost } from "store/actions/tweets";
import { IconsSm } from "./icons";
import { getUser } from "utils/getUser";
import { UserVerificateRow } from "./Profile/UserVerificate";
import { ModalLikes } from "./Modal/ModalLikes";
import { userWithoutAtSign } from "utils/userWithoutAtSign";
import { DeleteModal } from "./Modal/DeleteModal";
import TimeAgo from "utils/TimeAgo";

export const TweetItem = ({ tweet, comment }) => {
  const {
    userImage,
    _id: id,
    username,
    createdAt,
    content,
    selectedFile,
    likeCount,
    comments,
    range,
    name,
  } = tweet;
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const path = location.pathname.split("/").length;

  const selectedFileL = selectedFile.length;
  const tweetId = location.pathname.split("/")[3];

  const ButtonBar = ({ name, children, type, variable }) => {
    const alreadyLiked =
      likeCount?.filter(({ _id }) => _id == getUser._id).length ||
      likeCount.filter(({ userId }) => userId == getUser._id).length;

    return (
      <button
        onClick={() => {
          if (type == "delete") {
            return setOpen(true);
          }
          dispatch(type(id, history));
        }}
        className="fill-current text-bordes dark:text-gray1 group"
      >
        <div
          className={`${
            name === "like" && alreadyLiked > 0 && "fill-current text-blue1"
          } flex items-center space-x-3 group-hover:text-blue1`}
        >
          <div className="w-5">{children}</div>
          <p
            className={`${
              name === "like" && alreadyLiked > 0 && "text-blue1"
            } group-hover:text-blue1`}
          >
            {path < 4 && variable > 0 && variable}
          </p>
        </div>
      </button>
    );
  };
  const Content = () => {
    return (
      <div className={`${path === 4 ? "flex-col" : "flex-row"} flex pb-5`}>
        <div className="flex w-[13%] sm:w-[10%] xl:w-[7%]">
          <Link to={`/profile/${userWithoutAtSign(username)}`}>
            <img
              src={userImage}
              className="object-cover w-12 h-12 rounded-full"
            />
          </Link>

          {path === 4 && (
            <>
              <div className="flex">
                <h1 className="font-medium dark:text-white">
                  {UserVerificateRow({ name, username, range })}
                </h1>
                <span className="text-gray-500 ml-3">
                  <TimeAgo datetime={createdAt} />
                </span>
              </div>
              {comment && (
                <p>
                  En respuesta a
                  <span className="text-blue1 ml-1">
                    {history.location.pathname.split("/")[1]}
                  </span>
                </p>
              )}
            </>
          )}
        </div>
        <div
          className={`${
            path === 4 ? "xl:px-0 pl-0" : "xl:px-5"
          } flex flex-col w-[87%] sm:w-[90%] xl:w-[93%] pl-3`}
        >
          {path !== 4 && (
            <div className="flex w-11/12 xl:w-full">
              <h1 className="font-medium dark:text-white">
                {UserVerificateRow({ name, username, range })}
                {comment && <TimeAgo datetime={createdAt} />}
              </h1>

              <span className="ml-1 text-gray-500 transform scale-150">·</span>
              <span className="ml-1 text-gray-500">
                <TimeAgo datetime={createdAt} />
              </span>
            </div>
          )}
          <div className="flex flex-col w-full mt-1">
            {content ? (
              <p className="text-lg font-[450] text-white break-words">
                {content}
              </p>
            ) : null}
            {selectedFileL > 0 && (
              <div className="mt-1 min-h-[20rem] max-h-[30rem] grid grid-cols-2 border rounded-xl border-graylight dark:border-bordes overflow-hidden">
                {selectedFile.map((img, i) => (
                  <div
                    className={`${
                      selectedFileL === 1
                        ? "col-span-2"
                        : selectedFileL === 3 && i === 2
                        ? "col-span-2"
                        : null
                    } `}
                  >
                    <img className="w-full h-full object-cover" src={img} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <article
      className={`${
        path !== 4 &&
        "cursor-pointer hover:bg-gray1 hover:bg-opacity-10 dark:hover:bg-opacity-10"
      }flex flex-col p-3 border-b border-bordes`}
    >
      {path === 4 ? (
        <Content />
      ) : (
        <Link to={`/${userWithoutAtSign(username)}/status/${id}`}>
          <Content />
        </Link>
      )}
      {path === 4 && (
        <>
          {!comment ? (
            <div className="flex mb-5">
              <div className="flex items-center space-x-3">
                <h1 className="text-black dark:text-white">
                  {comments.length} Respuestas
                </h1>
                <h1 className="text-black dark:text-white">0 Retweets</h1>

                <ModalLikes data={likeCount} />
              </div>
            </div>
          ) : null}
        </>
      )}

      <div className={`${path === 4 ? "ml-0" : "ml-14"} flex justify-between`}>
        {!comment && (
          <div className="space-x-14">
            <ButtonBar type={likePost}>
              <MessageIcon />
            </ButtonBar>
            <ButtonBar type={likePost}>
              <RetweetIcon />
            </ButtonBar>
            <ButtonBar name="like" variable={likeCount?.length} type={likePost}>
              <FavoriteIcon />
            </ButtonBar>
          </div>
        )}
        {path === 4 &&
          (getUser.username === username || getUser.range === "own") && (
            <div
              className={`${comment && "flex justify-end items-center w-full"}`}
            >
              <ButtonBar type="delete">
                <IconsSm Icon={TrashIcon} />
              </ButtonBar>
            </div>
          )}
      </div>

      <DeleteModal
        title="Eliminar Tweet"
        description="¿Seguro q quieres eliminar este Tweet?"
        open={open}
        setOpen={setOpen}
      >
        <button
          onClick={() => {
            !comment
              ? dispatch(deletePost(id, history))
              : dispatch(deleteComment({ tweetId, id }));
          }}
          className="py-2 rounded-md w-full bg-blue1 text-white font-semibold"
        >
          Eliminar
        </button>
      </DeleteModal>
    </article>
  );
};

export default TweetItem;
