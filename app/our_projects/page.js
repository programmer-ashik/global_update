import ProjectCard from "../components/OurProject/ProjectCard"
import ProjectOdd from "../components/OurProject/ProjectOdd"


const projects = [
  {
    "id": "1",
    "title": "HP M22F 21.5 Inch FHD IPS Monitor #2E2Y3AA/2D",
    "descriptions": `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad quo eveniet ab totam necessitatibus sit eos repellat excepturi veniam hic porro provident expedita non dolores quasi distinctio, harum facere.
  Soluta deserunt alias corrupti iste neque cum ipsa asperiores laborum reiciendis.Consequuntur porro sunt voluptas deserunt voluptates, architecto velit quasi pariatur beatae, sequi soluta, praesentium doloribus optio ad ullam accusantium!
  Velit saepe facilis commodi voluptas natus suscipit officiis dignissimos.Eos hic sapiente porro, consectetur accusamus placeat ad assumenda omnis cum adipisci quos sequi in tempora perspiciatis consequatur quod eum cupiditate`,
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
    "title": "ICT LAB in Bangladesh Coast Guard Base, Agrajatra",
    "descriptions": `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad quo eveniet ab totam necessitatibus sit eos repellat excepturi veniam hic porro provident expedita non dolores quasi distinctio, harum facere.
  Soluta deserunt alias corrupti iste neque cum ipsa asperiores laborum reiciendis.Consequuntur porro sunt voluptas deserunt voluptates, architecto velit quasi pariatur beatae, sequi soluta, praesentium doloribus optio ad ullam accusantium!
  Velit saepe facilis commodi voluptas natus suscipit officiis dignissimos.Eos hic sapiente porro, consectetur accusamus placeat ad assumenda omnis cum adipisci quos sequi in tempora perspiciatis consequatur quod eum cupiditate`,
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

]
export default function OurProjects() {
  // const collections = collections;

  return (
    <div className=" w-full min-h-fit bg-[url('/wavey-fingerprint.svg')] py-16 px-2 lg:px-8 space-y-3 ">
      {/* banner project  */}
      {
        projects.map((project, index) =>
          index % 2 === 0 ? < ProjectCard key={project.id} project={project} /> : <ProjectOdd key={project.id} project={project} />
        )
      }
    </div>
  )
}
