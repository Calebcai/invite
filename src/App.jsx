import { Poupou } from './components/poupou';
import { Map } from './components/map';
import Layout from './layouts';
import ImgPreview from './components/imagePreview';
import Infomation from './components/info';
import ImageStack from "./components/imageStack";
import Preview from './components/Preview'
import 'tdesign-react/es/style/index.css'; // 少量公共样式

export default function App() {
  // 判断是否是pc或ipad设备
  const userAgent = navigator.userAgent;
  const isPC = /(iPhone|iPod|iOS|Android)/i.test(userAgent);

  return (
    <Layout>
      <Poupou />
      <Map />
      {
        isPC?<ImgPreview />:<ImageStack />
      }
      <Infomation />
      <Preview />
    </Layout>
  )
}