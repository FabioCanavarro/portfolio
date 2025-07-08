import GridBackground from "../_components/grid-background";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
      <GridBackground 
          sizex = {0.45}
          sizey = {0.2}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-32 md:pb-16 ">
        {children}
      </div>
    </>
  );
}