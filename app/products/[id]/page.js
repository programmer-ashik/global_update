
import Reviews from '@/app/components/Reviews/Reviews';
import Image from 'next/image';
const collections = [
    {
        "id": "1",
        "title": "HP M22F 21.5 Inch FHD IPS Monitor #2E2Y3AA/2D",
        "img": "https://www.ryans.com/storage/products/small/a4tech-fk11-grey-usb-fn-hotkeys-multimedia-mini-41727352177.webp",
        "categories": "KeyBoard",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": "2",
        "title": "HP M22F 21.5 Inch FHD IPS Monitor #2E2Y3AA/2D",
        "img": "https://www.ryans.com/storage/products/small/hp-m22f-215-inch-fhd-ips-monitor-71727352464.webp",
        "categories": "Monitor",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": "3",
        "title": "Gigabyte C200 GLASS ATX Mid-Tower Gaming Casi ...",
        "img": "https://www.ryans.com/storage/products/small/gigabyte-c200-glass-atx-mid-tower-gaming-casing-41727264723.webp",
        "categories": "casing",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": "4",
        "title": "Sandisk Extreme Pro 128GB MicroSDXC Memory Card with Adapter #SDSQXCD-128G-GN6MA",
        "img": "https://www.ryans.com/storage/products/small/sandisk-extreme-pro-128gb-microsdxc-memory-card-41727352098.webp",
        "categories": "Memory Card",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": "5",
        "title": "Kaloc DS90 17-32 inch LCD/LED Monitor Single Arm Desk Mount Stand",
        "img": "https://www.ryans.com/storage/products/small/sandisk-extreme-pro-128gb-microsdxc-memory-card-41727352098.webp",
        "categories": "Monitor Accessories",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": "6",
        "title": "Microlab M-590 2:1 Speaker",
        "img": "https://www.ryans.com/storage/products/small/microlab-m-590-21-51727352659.webp",
        "categories": "Speaker",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
]

const Product = ({ params }) => {
    // const productId = params.id;
    const data = collections.find((item) => item.id === params.id)
    console.log(data, 'single data');
    const { title, id, categories, special_Price, regular_Price, img, reviews, productId, quick_overview, specifications } = data;

    return (
        <div className=' w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2 py-16 px-8'>
            <div className=" relative w-full h-[500px] sm:h-full ">
                <Image fill className='object-cover' src={img} />
            </div>
            <div className="flex flex-col gap-4 p-4 px-3">
                {/* details */}
                <div className=" text-hero">
                    <h1 className=' text-lg font-bold text-hero'>{title}</h1>
                    <Reviews ratings={reviews} />
                    <p><span>Products ID: </span>{productId}</p>
                </div>
                {/* special Price */}
                <div className="w-[200px] h-[70px] px-4 py-2 bg-green-100 text-gray-700 space-y-2 rounded-md">
                    <p className=' text-sm text-gray-600'>Special Price</p>
                    <p className=' text-xl font-bold'>Tk: {special_Price}</p>
                </div>
                {/* regular price */}
                <div className="w-[200px] h-[60px] px-4 py-2 text-gray-700 space-y-2">
                    <p className=' text-sm text-hero'>Regular Price</p>
                    <p className=' text-xl font-bold text-hero line-through decoration-red-500 '>Tk: {regular_Price}</p>
                </div>
                {/* status Products */}
                <div className="w-[200px] h-[35px] px-4 bg-green-600 text-white flex justify-center items-center rounded-md">
                    Avalaible
                </div>

                <div className="flex flex-col text-hero">
                    <h1 className=' text-lg font-bold py-3'>Quick Overview</h1>
                    <ol className=' space-y-2'>
                        <li className=' space-x-4'> <span className='text-hero'>Display Size (Inch) -</span> {quick_overview.display}</li>
                        <li className=' space-x-4'><span className='text-hero'>Display Resolutions -</span> {quick_overview.display_Resolution}</li>
                        <li className=' space-x-4'> <span className='text-hero'>Refresh Rate (Hz)</span> {quick_overview.panel_Type}</li>
                        <li className=' space-x-4'> <span className='text-hero'>Refresh -</span> {quick_overview.refresh}</li>
                        <li className=' space-x-4'> <span className='text-hero'>HDMI Port -</span> {quick_overview.Port}</li>
                    </ol>
                </div>
                <div className="add_cart">
                    <button className=''>
                        <div className="w-[200px] h-[35px] px-4 bg-green-600 text-white flex justify-center items-center rounded-md">
                            Add Cart
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product