/* eslint-disable react/no-unescaped-entities */
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import ImageProfile from "@/components/ImageProfile";
export default function IndexPage() {
  return (
    <div>
      <MenuBar page={"หลัก"}/>
      <div>
        <div className="alert alert-warning" role="alert">
          <p className="font-title krub-regular-italic">
            {" "}
            เว็บยังทำไม่เสร็จก็ใจเย็นกันหน่อยอย่าพึ่งรีบเข้า!{" "}
          </p>
        </div>
      </div>
      <div className="section1-box">
        <h1 className="section1-name tagesschrift-regular">Hey I'm Nawapol</h1>
        <p className="section1-meta-data tagesschrift-regular">
          I'm a student at Rajamangala University of Technology <br />
          Pom pud thai dai nid noy english mai dai loei
        </p>
        <ImageProfile src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/406222264_1740300689749371_1241718534499329507_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=b1yS-3V6g2EQ7kNvwFMh173&_nc_oc=AdnRCQ0ARWbjchRDjOAdekq8afGxjcVPldro6mn_keat4a91At_QpnRgUeHwodHxK8c&_nc_zt=23&_nc_ht=scontent.fbkk7-3.fna&_nc_gid=9iebk6XA3dWM37LaN5teJw&oh=00_AfKvLynThog4c6opk8DvuUlhTawyDZnWRAI-_IsnylUS0w&oe=682A2203"/>
        <p className="text krub-regular">
          ผมพูดไทยได้นิดหน่อยครับ <br />
          อังกฤษไม่ได้เลย
        </p>
      </div>
      <div className="section2-box">
        <a
          className="section2-contact-link-facebook cal-sans-regular"
          href="https://www.facebook.com/nure.nakab"
        >
          Facebook
        </a>
        <a
          className="section2-contact-link-ig cal-sans-regular"
          href="https://www.instagram.com/nawapxl"
        >
          Instagram
        </a>
        <a
          className="section2-contact-link-line cal-sans-regular"
          href="https://github.com/nawapolsungjun"
        >
          Github
        </a>
      </div>
      <div className="section3-box">
        <div className="section2-box-a">
          <h1>งานอดิเรก</h1>
          <p>ผมชอบเล่นกีต้าร์</p>
          <p>ผมชอบอ่านหนังสือฟังเพลง</p>
        </div>
        <div className="section2-box-b">
          <h1>ชีวิตประจำวัน</h1>
          <p>ชอบการนอน</p>
          <p>เล่นเกมส์</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 


      




