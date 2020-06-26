import React from "react";
import { storage } from "../../utils/firebase";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Row, Card, Container } from "react-bootstrap";

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

class Demo extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });

    this.setState({
      uploading: true,
    });
    console.log(fileList);
    // You can use any AJAX library you like
    //   reqwest({
    //     url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    //     method: "post",
    //     processData: false,
    //     data: formData,
    //     success: () => {
    //       this.setState({
    //         fileList: [],
    //         uploading: false,
    //       });
    //       message.success("upload successfully.");
    //     },
    //     error: () => {
    //       this.setState({
    //         uploading: false,
    //       });
    //       message.error("upload failed.");
    //     },
    //   });
    const promises = [];
    fileList.forEach((el) => {
      // setFilename(el.name);

      console.log("start of upload");
      // async magic goes here...
      // if (imageAsFile === "") {
      //   console.error(
      //     `not an image, the image file is a ${typeof imageAsFile}`
      //   );
      // }
      const uploadTask = storage.ref(`/documents/${el.name}`).put(el);
      //initiates the firebase side uploading
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //takes a snap shot of the process as it is happening
          let getProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // setPercent(getProgress);
          console.log("Upload is " + getProgress + "% done");
          console.log(snapshot);
        },
        (err) => {
          //catches the errors
          console.log(err);
        },
        async () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          const fireBaseUrl = await storage
            .ref("documents")
            .child(el.name)
            .getDownloadURL();
          // .then((fireBaseUrl) => {
          //   setFileUrl((prevObject) => ({
          //     ...prevObject,
          //     url: fireBaseUrl,
          //   }));
          // setFileUrl((prevObject) => ({
          //   ...prevObject,
          //   url: fireBaseUrl,
          // }));
          // setProgress(false);
          // setFilename(el.name);
          // sendToServer({
          //  url: fireBaseUrl,
          //   name: el.name,
          // });
          // items.push({
          //   url: fireBaseUrl,
          //    name: el.name,
          //  })
          // dispatch({
          //   type: action,
          //   payload: {
          //     url: fireBaseUrl,
          //     name: el.name,
          //   },
          // });
          this.setState({
            // fileList: [],
            uploading: false,
          });
          console.log(fireBaseUrl);
        }
      );
    });
    Promise.all(promises)
      .then(() => console.log("done"))
      .catch((err) => console.log(err.code));
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div className="container" style={{ top: "50%" }}>
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
                <p stlye={{ fontSize: "12px" }} className="mt-2 ml-2"></p>
                <div className="pt-2 pl-2">
                  <Upload {...props}>
                    <Button>
                      <UploadOutlined /> Select File
                    </Button>
                  </Upload>
                  <Button
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{ marginTop: 16 }}
                  >
                    {uploading ? "Uploading" : "Start Upload"}
                  </Button>
                </div>
              </div>
              {/* 
              <Vl>
                <div className="ml-4 mt-3">
                  <Btn onClick={this.handleUpload}>
                    <UploadOutlined
                      className="mr-2"
                      style={{ fontSize: "1.2rem" }}
                    />
                    {uploading ? "Uploading" : "Start Upload"}
                  </Btn>
                </div>
              </Vl> */}
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Demo;
