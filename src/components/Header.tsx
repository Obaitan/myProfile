"use client";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const HeaderComponent = ({
  isMobileMenuOpen,
  toggleMobileMenu,
}: HeaderProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-30 bg-[#101214] xl:bg-zinc-950/95 backdrop-blur-sm">
        <div className="px-7 md:px-10 lg:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:w-[1320px] mx-auto h-[71px] py-6 relative bottom-2">
          <div className="xl:hidden flex justify-between items-center gap-5">
            <div>
              <p className="text-[15px] text-zinc-100 font-medium">
                Richard Obaitan
              </p>
              <p className="text-[11px] font-medium text-zinc-400 uppercase">
                Front End Developer
              </p>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="cursor-pointer hover:text-amber-300 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8 text-zinc-100"
              >
                {isMobileMenuOpen ? (
                  // Close icon (X)
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  // Hamburger menu icon
                  <>
                    <path d="M15 12H3" />
                    <path d="M17 18H3" />
                    <path d="M21 6H3" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
