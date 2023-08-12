
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "./styles.module.css";
import { ImageViewer, Image, Space } from 'tdesign-react';
import {BrowseIcon} from 'tdesign-icons-react';

const slides = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
  '/images/12.jpg',
  '/images/13.jpg',
  '/images/14.jpg',
  '/images/15.jpg',
  '/images/16.jpg',
  '/images/17.jpg',
  '/images/18.jpg',
  '/images/19.jpg',
  '/images/20.jpg',
  '/images/21.jpg',
  '/images/22.jpg',
  '/images/23.jpg',
  '/images/24.jpg',
  '/images/25.jpg',
  '/images/26.jpg',
  '/images/27.jpg',
  '/images/28.jpg',
  '/images/29.jpg',
];

const Preview = () => {
  const [visible, setVisible] = useState(false)

  const trigger = ({open}) => {
    const mask = (
      <div
        style={{
          background: 'rgba(0,0,0,.6)',
          color: '#fff',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={open}
      >
        <span><BrowseIcon size="16px" name={'browse'}/> 预览</span>
      </div>
    );

    return (
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'content-box',
        border: '4px solid var(--td-bg-color-secondarycontainer)',
        borderRadius: 'var(--td-radius-medium)',
      }}>
        <Image
          alt={'test'}
          src={'../../../public/images/1.jpg'}
          overlayContent={mask}
          overlayTrigger="hover"
          fit="contain"
          style={{
            width: '300px',
            height: '100%',
            backgroundSize:'contain',
            backgroundColor: '#fff'
          }}
        />
        <div style={{
          width: '100%',
          height: '56px',
          padding: '0 16px',
          lineHeight: '56px',
          position: 'absolute',
          bottom: '0',
          color: 'var(--td-text-color-anti)',
          backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, .4) 0%, rgba(0, 0, 0, 0) 100%)',
          boxSizing: 'border-box',
          zIndex: 1
        }}>
          <span>点击查看相册</span>
        </div>
      </div>

    )
  }
  
  return (
    <div className="min-h-screen">
      <div className="absolute text-black -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
          <ImageViewer trigger={trigger} images={slides} title="相册"/>
      </div>
    </div>
  );
}


export default Preview