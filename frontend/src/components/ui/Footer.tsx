interface FooterProps {
  logo: string;
  socialMedia: string[];
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="bg-(--primary-color)">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-8">
        {/* Logo Section */}
        <div className="flex">
          <h1 className="text-2xl font-bold">{props.logo}</h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-8">
          {/* Instagram */}
          <div className="flex items-center gap-2">
            <p className="text-m font-bold text-(--dark-color) hover:text-(--orange-color) hover:cursor-pointer">
              Instagram
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--dark-color) hover:text-(--orange-color) transition-colors"
            >
              <img
                src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781317845/instagram_pjp9zy.svg"
                alt="instagram icon"
                className="w-6 h-6"
              />
            </a>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-2">
            <p className="text-m font-bold text-(--dark-color)  hover:text-(--orange-color) hover:cursor-pointer">
              Facebook
            </p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--dark-color) hover:text-(--orange-color) transition-colors"
            >
              <img
                src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781317845/facebook_tqv8v8.svg"
                alt="Facebook icon"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
