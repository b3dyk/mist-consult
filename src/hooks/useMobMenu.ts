import { useScrollLock } from "./useScrollLock";

export const useMobMenu = () => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const handleBurgerMenu = () => {
    const mobileMenu = document.querySelector("#mobileMenu") as HTMLElement;
    mobileMenu.classList.toggle("isOpen");

    if (mobileMenu.classList.contains("isOpen")) {
      lockScroll();
    } else {
      unlockScroll();
    }
  };

  return handleBurgerMenu;
};
