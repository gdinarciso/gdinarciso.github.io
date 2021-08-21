// import { styler, value, listen, pointer, spring } from "popmotion";

import popmotion from "popmotion";
const { styler, spring, listen, pointer, value } = popmotion;

const ball = document.querySelector(".box");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start((e) => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
  }).start(ballXY);
});

// code taken from one of the examples on popmotion.io
// const ball = document.querySelector(".box");
// const divStyler = popmotion.styler(ball);
// const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);

// popmotion.listen(ball, "mousedown touchstart").start((e) => {
//   e.preventDefault();
//   popmotion.pointer(ballXY.get()).start(ballXY);
// });

// popmotion.listen(document, "mouseup").start(() => {
//   popmotion
//     .spring({
//       from: ballXY.get(),
//       velocity: ballXY.getVelocity(),
//       to: { x: 0, y: 0 },
//       stiffness: 200,
//       // mass: 3,
//       // damping:10
//     })
//     .start(ballXY);
// });
