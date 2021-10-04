export function FetchData(callback: string, data: any){
    return fetch(`https://typescript-template/${callback}`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    });
};