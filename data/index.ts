import { Lembrete } from "../types/lembrete";

type BD = {
    lembretes: Lembrete[]
};

export const data: BD = {
    lembretes: [
        {
            LembreteId: 1,
            TituloLembrete: 'Pagar',
            CorpoLembrete: 'Pagar conta de luz ref AGO25',
            StatusLembrete: false
        },
        {
            LembreteId: 2,
            TituloLembrete: 'Comprar',
            CorpoLembrete: 'Comprar comida para o mês',
            StatusLembrete: true
        },
        {
            LembreteId: 3,
            TituloLembrete: 'Comprar',
            CorpoLembrete: 'Comprar presente do dia dos namorados',
            StatusLembrete: false
        },
        {
            LembreteId: 4,
            TituloLembrete: 'Carro',
            CorpoLembrete: 'Levar carro para revisão',
            StatusLembrete: true
        },
        {
            LembreteId: 5,
            TituloLembrete: 'Pagar',
            CorpoLembrete: 'Pagar condomínio ref AGO25 ',
            StatusLembrete: false
        },
        {
            LembreteId: 6,
            TituloLembrete: 'Estudar',
            CorpoLembrete: 'Estudar RN 1h por dia ',
            StatusLembrete: true
        },
        {
            LembreteId: 7,
            TituloLembrete: 'Carro',
            CorpoLembrete: 'Abastecer o carro',
            StatusLembrete: false
        }
    ]
}