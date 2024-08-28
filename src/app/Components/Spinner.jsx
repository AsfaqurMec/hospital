import Image from "next/image";
import im from '../../../public/Screenshot_2024-08-21_023938-removebg-preview.png'

const Spinner = () => {
    return (
        <div
        className={`w-full  flex items-center justify-center bg-[#07332f] h-screen`}
        style={{
          borderColor: 'transparent',
          borderTopColor: 'currentColor',
        }}
      >
        <Image
          src={im}
          alt="Loading"
          className="h-24 w-24 object-contain animate-spin"
        >
        </Image>
        </div>
    );
};

export default Spinner;