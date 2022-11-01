import React, { useState } from "react";
// import { ref, storage } from "../FireStorage";
export const Feeds = () => {
  //   const imagesRef = ref(storage, "images");
  const [photo, setPhoto] = useState("");
  const [files, setFile] = useState(null);
  const SelectFile = () => {
    console.log(photo);
    console.log(files);
    // setFiles()
  };
  return (
    <>
      <div>
        <input
          type="file"
          name="filename"
          accept="image/gif, image/jpeg, image/png"
          onChange={(e) => {
            let isImage = e.target.files[0]?.type?.split("/")[0] === "image";

            if (isImage) {
              const pre = URL.createObjectURL(e.target.files[0]);
              setPhoto(pre);
              setFile(e.target.files[0]);
            } else {
              alert("Only image are accepted");
              return;
            }
          }}
        />
        <button onClick={SelectFile}></button>
        <img src={photo} alt="" />
      </div>
    </>
  );
};
