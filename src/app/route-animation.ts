import {
  trigger,
  transition,
  style,
  query,
  group,
  stagger,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';

export const fader =
  trigger('footerAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) tranclateY(-100%)'
        }),
      ]),
      query(':enter', [
        animate('1000ms ease',
          style({
            opacity: 1, transform: 'scale(1) tranclateY(0)'
          })
        )
      ])
    ])
  ]);

export const slider =
  trigger('routeAnimations', [
    transition('* => canals', slideTo('right')),
    transition('* => films', slideTo('left')),
    transition('canals => *', slideTo('left')),
    transition('films => *', slideTo('right'))
  ]);

function slideTo(direction) {
  const optional = { optional: true};
  return [
    query(':enter, :leave', [style({position: 'absolute', top: 0, [direction]: 0, width: '100%', })], optional),
    query(':enter', [style({[direction]: '-100%'})], optional),
    group([
      query(':leave', [
        animate('600ms ease', style({[direction]: '150%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({[direction]: '0'}))
      ], optional),
      query(':enter .anim', stagger(100, [
        style({ transform:'translateX(100%)'}),
        animate('0.5s ease-in-out'), style({[direction]: '0', transform: 'translateX(0)'})
      ]), optional),
    ])
  ]
}

































// query(':enter, :leave', [style({position: 'absolute', top: 0, width: '100%', transform: 'scale(0) tranclateY(100%)'})], {optional: true}),
//   query(':enter', [style({[direction]: '-150%'})]),
//   group([
//     query(':leave', [
//       animate('600ms ease', style({[direction]: '150%'}))
//     ], optional),
//     query(':enter', [
//       animate('600ms ease', style({[direction]: '0'}))
//     ], optional)
//   ])
