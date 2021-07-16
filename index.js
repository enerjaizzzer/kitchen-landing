const burger = document.querySelector(".header__burger");
console.log(burger);

const visibleBurgerBlock = () => {
  const burgerBlock = document.querySelector('.burger-contacts-block');
  const close = document.querySelector('.burger-contacts-block__header-close');
  const content = document.querySelector('.burger-contacts-block__content');

  console.log(burgerBlock);
  burgerBlock.style.width = "360px";
  burgerBlock.style.padding = "0 20px";
  close.style.width = "20px";
  burgerBlock.style.visibility = "visible";
  content.style.visibility = "visible";

  const notVisibleBurgerBlock = () => {
    const close = document.querySelector('.burger-contacts-block__header-close');

    close.style.width = "0";
    content.style.visibility = "hidden";
    burgerBlock.style.padding = "0";
    burgerBlock.style.width = "0";
    burgerBlock.style.visibility = "hidden";
  };

  close.addEventListener("click", notVisibleBurgerBlock)
};

burger.addEventListener("click", visibleBurgerBlock);