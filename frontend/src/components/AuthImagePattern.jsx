import { useEffect, useState } from "react";

const AuthImagePattern = ({ title, subtitle, fetchUserImages }) => {
  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      if (fetchUserImages) {
        const images = await fetchUserImages();
        setUserImages(images);
      }
    };
    loadImages();
  }, [fetchUserImages]);

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center transform transition duration-700 ease-in-out animate-[scaling_2s_infinite_alternate]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={userImages[i] || "../../../logo.png"}
                alt={`User ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
