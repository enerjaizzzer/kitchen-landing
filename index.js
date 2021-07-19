const burger = document.querySelector(".header__burger");

const visibleBurgerBlock = () => {
  const burgerBlock = document.querySelector('.burger-contacts-block');
  const close = document.querySelector('.burger-contacts-block__header-close');
  const content = document.querySelector('.burger-contacts-block__content');

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

const line = document.querySelector(".comparison__component-line");

const moveLogic = (event, clientX, shiftX = 0) => {
  const comparison = document.querySelector(".comparison__component");

  let newLeft = clientX - shiftX - comparison.getBoundingClientRect().left;

  if (newLeft < 0) {
    newLeft = 0;
  }
  let rightEdge = comparison.offsetWidth - line.offsetWidth;
  if (newLeft > rightEdge) {
    newLeft = rightEdge;
  }


  const firstFrame = document.querySelector(".comparison__component-first-frame");
  const secondFrame = document.querySelector(".comparison__component-second-frame");
  const widthFirstFrame = Math.round(1000 / comparison.clientWidth * newLeft)/ 10;
  const widthSecondFrame = 100 - widthFirstFrame;
  firstFrame.style.width = `${widthFirstFrame}%`;
  secondFrame.style.width = `${widthSecondFrame}%`;

  line.style.left = newLeft + 'px';
};

line.onmousedown = function(event) {
  event.preventDefault();
  let shiftX = event.clientX - line.getBoundingClientRect().left;

  const mouseMove = (e) => {
    moveLogic(e, e.clientX, shiftX)
  };

  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', mouseMove);
  }
};

line.ontouchstart = function(event) {
  event.preventDefault();

  const touchMove = (e) => {
    moveLogic(e, e.changedTouches[0].clientX)
  };

  document.addEventListener('touchmove', touchMove);
  document.addEventListener('touchend', onTouchEnd);

  function onTouchEnd() {
    document.removeEventListener('mouseup', onTouchEnd);
    document.removeEventListener('mousemove', touchMove);
  }
};

line.ondragstart = function() {
  return false;
};
