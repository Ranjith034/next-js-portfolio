//next image
import Image from "next/image";


const Avatar = () => {
  return  (
  <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/avatartt.png'} 
    width={1080}/*737*/ 
    height={1439} /*687*/
    all=''
    className='translate-z-0 w-full h-full'
    />
  </div>
  );
};

export default Avatar;
