export function range(start,end,step){
    var ans = [];
    for (let i = start; i <= end; i=i+step) {
        ans.push(i);
    }
    return ans;
}