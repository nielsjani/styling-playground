import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('AnimateTooPageAnimation <=> AnimatePageAnimation', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      //  group makes all of its 'steps' run in parallel
      group([
        query(':leave', [
          animate('2000ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('2000ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
