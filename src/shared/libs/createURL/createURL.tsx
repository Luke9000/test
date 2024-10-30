// export const createUrl = (baseUrl: string, params: Record<string, string | number>): string => {
//     if (!baseUrl) {
//         return ''; 
//     }

//     const queryString = new URLSearchParams(
//         Object.fromEntries(Object.entries(params).map(([key, value]) => [key, String(value)])))
//     ).toString();
    
//     return `${baseUrl}?${queryString}`;
// };
