import { data } from "../data/index";
import { Lembrete } from "../types/lembrete";

const URL = "http://10.59.47.27:5076/Lembrete";

export function getAllLembretes(){
    return data.lembretes;
};

export function getLembretebyId(pId:number){
    return  data.lembretes.find(item=>item.LembreteId===pId)
}

export async function getAllLembretesAPI() {
    const response = await fetch(URL);
    const json = await response.json();
    console.log(json);
    return json;
}
 
export async function getLembreteByIdAPI(pId: number) {
    const response = await fetch(`${URL}/${pId}`);
    const json = await response.json();
    console.log(json);
    return json;
}

export async function atualizarLembrete(lembrete:Lembrete) {
    const lembreteUnico =
    {
        "lembreteId":lembrete.LembreteId,
        "tituloLembrete":lembrete.TituloLembrete,
        "corpoLembrete":lembrete.CorpoLembrete,
        "statusLembrete":lembrete.StatusLembrete
    }
    const response = await fetch(`${URL}/update/${lembrete.LembreteId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lembreteUnico),
    });
    if (!response.ok) {
        throw new Error("Erro ao salvar o lembrete");
    }
    console.log(response.json);
    return response.json();    
}

export async function criarLembrete(lembrete:Omit<Lembrete,'lembreteId'>) {
    const lembreteUnico =
    {
        "tituloLembrete":lembrete.TituloLembrete,
        "corpoLembrete":lembrete.CorpoLembrete,
        "statusLembrete":lembrete.StatusLembrete
    }
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lembreteUnico),
    });
    if (!response.ok) {
        throw new Error("Erro ao criar o lembrete");
    }
    console.log(response.json);
    return response.json();
   
}

export async function deleteLembrete(pId: number) {
    const response = await fetch(`${URL}/del/${pId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (!response.ok) {
        throw new Error("Erro ao deletar o lembrete");
    }
    console.log(response.json);
    return response.json();    
}