import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Row, Card, Container } from "react-bootstrap";
import { storage } from "../../utils/firebase";
import styled from "styled-components";

const Vl = styled.div`
  border-left: 1px solid #a7a7a7;
  height: 80px;
  position: absolute;

  left: 70%;
  margin-left: -3px;
  top: 0;
`;
const Btn = styled.button`
  width: 150px;
  height: 38px;
  background: #e5f2ff 0% 0% no-repeat padding-box;
  border-radius: 21px;
  border: none;
  opacity: 1;
`;

const UploadDoc = ({ title }) => {
  const [filename, setFilename] = useState(null);
  const [progress, setProgress] = useState(false);
  const [percent, setPercent] = useState(0);

  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const fileInput = useRef(null);
  const handleClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (e, title) => {
    e.preventDefault();
    console.log(e.target.files);
    // setFilename(e.target.files[0].name);

    let image = e.target.files[0];
    setImageAsFile(image);
    setProgress(true);

    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage.ref(`/documents/${image.name}`).put(image);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //takes a snap shot of the process as it is happening
        let getProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(getProgress);
        console.log("Upload is " + getProgress + "% done");
        console.log(snapshot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("documents")
          .child(image.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
            setProgress(false);
            setFilename(image.name);
            sendToServer({
              title,
              name: image.name,
            });
            console.log(fireBaseUrl);
          });
      }
    );
  };

  const sendToServer = (data) => {};

  return (
    <div>
      <Card
        style={{
          minHeight: "40px",
          boxShadow: " 0px 3px 15px #0000001A",
          borderRadius: "10px",
          border: "none",
        }}
        className="mb-3"
      >
        <Card.Body>
          <Row className="pl-2">
            <span>
              <FontAwesomeIcon
                style={{ color: "#51A4FB", fontSize: "25px" }}
                icon={["far", "file-alt"]}
              />
            </span>
            <div className="line-height-sm" style={{ lineHeight: "40%" }}>
              <p stlye={{ fontSize: "12px" }} className="mt-2 ml-2">
                {title}
              </p>
              <div className="pt-2 pl-2">
                {!(filename || progress) ? "No file uploaded" : null}
                {filename ? (
                  <a href={imageAsUrl.imgUrl} target="_blank">
                    <p style={{ color: "#51A4FB" }}>{filename}</p>
                  </a>
                ) : (
                  ""
                )}
                {progress ? <Progress percent={percent} status="active" /> : ""}
              </div>
            </div>
            <Vl>
              <div className="ml-4 mt-3">
                <Btn onClick={() => handleClick()}>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    onChange={(e) => handleFileChange(e)}
                    ref={fileInput}
                  />
                  <UploadOutlined
                    className="mr-2"
                    style={{ fontSize: "1.2rem" }}
                  />
                  Choose file
                </Btn>
              </div>
            </Vl>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UploadDoc;
