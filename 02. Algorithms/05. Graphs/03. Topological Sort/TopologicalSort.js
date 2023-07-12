/**
 * The graphs should not have any cycles. 
 * Each index is a node and at each index we have an array of neighbors.
 * Time O(n) | Space O(n)
*/
var topologicalSort = function(graph) {
    const result = [];
    const visited = new Set();
    const dfs = (node) => {
        if(visited.has(node)) return;
        visited.add(node);
        const neighbor = graph[node];
        for(let i = 0; i < neighbor.length; i++) {
            dfs(neighbor[i]);
        }
        result.push(node);
     }
    for(let i = 0; i < graph.length; i++) {
        dfs(i);
    }
    return result;
 };  

const graph = [[1,2],[2,3],[5],[5],[5],[],[]];
console.log(topologicalSort(graph));
