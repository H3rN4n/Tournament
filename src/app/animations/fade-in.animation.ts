import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        transition('* => *', [
            query('.fadeIn', style({ opacity: 0 }), { optional: true }),
            query('.fadeIn', stagger('100ms', [
                animate('200ms ease-in', keyframes([
                    style({ opacity: 0, transform: 'translateY(-35px)', offset: 0 }),
                    style({ opacity: .5, transform: 'translateY(-15px)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
                ]))
            ]), { optional: true })
        ])
    ]);