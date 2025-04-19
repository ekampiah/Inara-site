import { Title, Image, Tabs } from "@mantine/core";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../style/embla.css";
import { TbStretching } from "react-icons/tb";

export default function Events() {
  const [emblaRef, _] = useEmblaCarousel({}, [Autoplay()]);

  return (
    <section id="events" className="flex flex-col p-5 gap-1 w-full h-full">
      <section id="hero" className="text-center items-center">
        <Title size="xl" className="text-center">
          Where <span className="text-[#EC9377]"> healing </span>meets{" "}
          <span className="text-[#EC9377]"> life </span>
        </Title>
      </section>
      <Tabs defaultValue="pnb-la" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="pnb-la" leftSection={<TbStretching />}>
            Pilates & Brunch LA
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="pnb-la">
          <section id="pnb-la" className="p-10">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container max-h-150">
                  {Array.from(
                    { length: 14 },
                    (_, i) => `/assets/gallery/pnb-la/img_${i + 1}.jpg`
                  ).map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt="gallery image"
                      radius="xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Tabs.Panel>
      </Tabs>
    </section>
  );
}
