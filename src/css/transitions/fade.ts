import {CSSTransitionOptions,TransitionMode} from '../base';

interface CSSFadeOptions extends CSSTransitionOptions  {
  duration?: number
  ease?: string,
  opacity?: number
}

export function fade(opts:CSSFadeOptions = {}) {
  const {
    duration = 500,
    ease = 'ease-out',
    opacity = 0.0,
    mode = TransitionMode.Both
  } = opts;
  return {
    css: `
    .leave-active {
      transition: opacity ${duration}ms ${ease},
        transform ${duration}ms ${ease};
    }
    .enter-active {
      transition: opacity ${duration}ms ${ease},
        transform ${duration}ms ${ease};
    }
  .leave-active {
    position: ${mode === TransitionMode.Both ? 'fixed' : 'absolute'};
  } 
  .enter-from, .leave-to {
    opacity: ${opacity};
  }
  .enter-to, .leave-from {
    opacity: 1;
  }
  `,
  ...opts
  };
};