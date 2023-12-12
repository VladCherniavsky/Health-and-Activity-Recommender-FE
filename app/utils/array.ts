
export const getDescendingSortByKeyPredicate = (key: string) => (a:any, b: any) => {
    if ( a[key] < b[key] ){
        return 1;
    }
    if ( a[key] > b[key] ){
        return -1;
    }
    return 0;
}