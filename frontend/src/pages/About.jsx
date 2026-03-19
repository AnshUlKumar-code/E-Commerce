import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

export default function About() {
  return (
    <div >
      <div className="text-2xl text-center  border-t" style={{
    borderTop: "1px solid #d1d5db",
  
  }}>
        <Title text1={"ABOUT"} text2={"US"}/>

      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.logo} className="w-full md:max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
       <p>Welcome to our online bookstore — your one-stop destination for discovering stories, knowledge, and inspiration.

We believe that books have the power to transform lives. Whether you're a passionate reader, a student, or someone exploring new ideas, our platform is designed to bring the world of books closer to you. From timeless classics to the latest bestsellers, we offer a carefully curated collection across a wide range of genres including fiction, non-fiction, academic, self-help, and more.

Our mission is simple: to make reading accessible, affordable, and enjoyable for everyone. We aim to create a seamless shopping experience where you can easily browse, discover, and purchase your favorite books from the comfort of your home.</p>
        </div>

      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>


      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"style={{
    border: "1px solid #d1d5db"}}>
          <b>Quality Assurance:</b>
          <p>We meticulously select and vet each product to ensure it meets our strigent standards</p>

        </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5" style={{
    border: "1px solid #d1d5db"}}>
          <b> Convenience:</b>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"style={{
    border: "1px solid #d1d5db"}}>
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  );
}
