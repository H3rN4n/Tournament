import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        transition('* => *', [
            query('.fadeIn', style({ opacity: 0 }), { optional: true }),
            query('.fadeIn', stagger('200ms', [
                animate('1s ease-in', keyframes([
                    style({ opacity: 0, transform: 'translaY(-75px)', offset: 0 }),
                    style({ opacity: .5, transform: 'translaY(-35px)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'translaY(0px)', offset: 1 })
                ]))
            ]), { optional: true })
        ])
    ]);