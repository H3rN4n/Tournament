import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';

export const slideInAnimation =
    trigger('slideInAnimation', [
        transition('* => *', [
            query('.slideIn', style({ opacity: 0, transform: 'translateX(100px)' }), { optional: true }),
            query('.slideIn', stagger('100ms', [
                animate('200ms 400ms ease-out', keyframes([
                    style({ opacity: 1, transform: 'translateX(0px)' })
                ]))
            ]), { optional: true })
        ])
    ]);
