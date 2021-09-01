/*
 * @Author: your name
 * @Date: 2021-09-01 00:57:31
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-09-01 13:10:28
 * @FilePath: /react-vblog/src/views/goods/components/ImageUpdate.jsx
 */
import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

// import React from 'react';
// TODO: 实现图片上传封装
const ImageUpdate = () => {
	const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);

	const onChange = (item) => {
    setFileList(item.fileList);
    if(item.file.status==='done'){
      console.log('上传完成');
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

	return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        name='imgFile'
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
	);
};

export default ImageUpdate;