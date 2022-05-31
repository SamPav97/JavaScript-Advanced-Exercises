function sortTwoCrit(arr) {
    arr.sort(sortTwoCrit)
    return arr.join('\n')
    

    function sortTwoCrit(curr, nxt) {
        if (curr.length === nxt.length) {
            return curr.localeCompare(nxt);
        }
        return curr.length - nxt.length;
    } 
        
}

sortTwoCrit(['zlpha', 
'beta', 
'gamma'])
