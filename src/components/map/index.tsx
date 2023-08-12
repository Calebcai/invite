import React, { useState, useEffect } from 'react'

export const Map = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    const openGaodeMap = () => {
        if (/micromessenger/i.test(userAgent)) {
            alert("请在右上角浏览器中打开高德地图")
        }
        // 判断设备操作系统为苹果
        if (/android/.test(userAgent)) {
            // 打开高德地图
            window.location.href = "androidamap://viewMap?sourceApplication=高德地图&poiname=霞浦维也纳国际酒店&dlat=26.8771&dlon=120.0056&dev=0&t=2";
        }
        // 判断设备操作系统为苹果
        else if (/iphone|ipad|ipod/.test(userAgent)) {
            // 打开高德地图
            window.location.href = "iosamap://viewMap?sourceApplication=高德地图&poiname=霞浦维也纳国际酒店&dlat=26.8771&dlon=120.0056&dev=0&t=2";
        }
        // 其他设备，使用通用的URL Scheme
        else {
            // 打开高德地图
            window.location.href = "https://uri.amap.com/navigation?to=26.8771,120.0056,霞浦维也纳国际酒店&mode=car";
        }
    };
    const openBaiduMap = () => {
        if (/micromessenger/i.test(userAgent)) {
            alert("请在右上角浏览器中打开百度地图")
        }
        // 判断设备操作系统为安卓
        if (/android/.test(userAgent)) {
            // 打开百度地图
            window.location.href = "baidumap://map/direction?origin=我的位置&destination=霞浦维也纳国际酒店&mode=driving";
        }
        // 判断设备操作系统为苹果
        else if (/iphone|ipad|ipod/.test(userAgent)) {
            // 打开百度地图
            window.location.href = "baidumap://map/direction?origin=我的位置&destination=霞浦维也纳国际酒店&mode=driving";
        }
        // 其他设备，使用通用的URL Scheme
        else {
            // 打开百度地图
            window.location.href = "https://api.map.baidu.com/direction?origin=我的位置&destination=霞浦维也纳国际酒店&mode=driving";
        }
    };

        return (
            <div className='bg-[#cbc4e4]'>
                <div className='p-10 text-xl font-semibold text-center'>
                    <p>位置信息</p>
                    <p className="text-sm">geolocation</p>
                </div>
                <div className="w-full card glass">
                    <figure>
                        <img src="https://ak-d.tripcdn.com/images/200s13000000ukahj03BF_Z_960_660_R5_D.jpg_.webp" alt="酒店" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">维也纳国际酒店</h2>
                        <p>地址：福建省宁德市霞浦县维也纳国际酒店7层维也纳厅</p>
                        <div className="justify-center card-actions">
                            <button className="btn btn-success" onClick={() => {
                                window.location.href = "https://apis.map.qq.com/uri/v1/routeplan?type=drive&from=我的位置&tocoord=26.8771,120.0056&to=霞浦维也纳国际酒店&referer=霞浦维也纳国际酒店";
                            }}>微信内查看导航</button>
                            <button className="btn btn-info" onClick={openGaodeMap}>去高德地图导航</button>
                            <button className="btn bg-[#e4d87c]" onClick={openBaiduMap}>去百度地图导航</button>
                            {/* <button className="btn btn-primary" onClick={() => {
                            if (wx) {
                                wx.miniProgram.navigateTo({
                                    url: '/pages/map/index' // 要跳转的原生页面路径
                                });
                            } else {
                                
                            }
                        }}>去导航</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
