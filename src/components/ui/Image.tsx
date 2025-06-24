import Image from "next/image";

type ImageProps = {
  src: string;
  className: string;
  alt: string;
};

export const NextImage: React.FC<ImageProps> = ({ src, className, alt }) => {
  return (
    <>
      <div className={className}>
        <Image
          src={src}
          alt={alt || src}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }} // Ensure full fill
        />
      </div>
    </>
  );
};
